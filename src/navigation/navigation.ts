import { Component } from 'react';
import { BackHandler, EmitterSubscription, Platform } from 'react-native';
import { LayoutBottomTabs, LayoutTabsChildren, Navigation } from 'react-native-navigation';

export class CustomNavigation {
  private static appNavigation: CustomNavigation;
  private static MAIN_STACK = 'MAIN_STACK';
  isInit: boolean;
  currentStack: string;
  lastCommand?: string;
  firstComponentNewInStack?: string;
  lastComponentInMainStack?: string;
  modalIsOn: boolean;
  currentScreen?: string;
  prevScreen?: string;
  currentComponentId?: string;


  private constructor() {
    this.isInit = true;
    this.currentStack = CustomNavigation.MAIN_STACK;
    this.modalIsOn = false;
    this.registerBackHandlerListener();
    this.registerDidAppearListener();
    this.registerDidDisappearListener();
    this.registerCommandCompletedListener();
  }

  static get instance() {
    if (!CustomNavigation.appNavigation) {
      CustomNavigation.appNavigation = new CustomNavigation();
    }
    return CustomNavigation.appNavigation;
  };


  push = (name: string, passProps?: Object) => {


    if (name === this.currentScreen || !this.currentComponentId) return;

    return Navigation.push(this.currentComponentId, {
      component: {
        id: name,
        name,
        passProps
      }
    });

  };


  pop = async () => {
    console.log(">>>>>pop", !this.currentComponentId)
    if (!this.currentComponentId) return;
    //pop stack
    if (this.firstComponentNewInStack == this.currentComponentId) {
      return this.popStack();
    }
    //pop
    return await Navigation.pop(this.currentComponentId);
  };

  popTo = (popTo: string) => {
    return Navigation.popTo(popTo);
  }


  setRootScreen = (name: string, passProps?: Object) => {
    return Navigation.setRoot({
      root: {
        stack: {
          id: CustomNavigation.MAIN_STACK,
          children: [{
            component: {
              id: name,
              name,
              passProps
            }
          }],
        },
      },
    });
  };


  setRootBottomTabs = (tabs: string[], passProps?: Object) => {
    const children: LayoutTabsChildren[] = tabs.map((tab) => ({ component: { id: tab, name: tab } }));

    return Navigation.setRoot({
      root: {
        bottomTabs: {
          children
        }
      }
    });
  };

  setCurrentTabIndex = (currentTabIndex: number) => {
    if (!this.currentComponentId) return;
    Navigation.mergeOptions(this.currentComponentId, {
      bottomTabs: {
        currentTabIndex
      }
    });

  }


  showModal = (name: string, passProps?: Object, stackName?: string) => {
    if (name === this.currentScreen) return;
    this.currentStack = stackName ? stackName : 'modalStack';
    this.currentScreen = name;
    this.currentComponentId = name;
    return Navigation.showModal({
      stack: {
        id: this.currentStack,
        children: [{
          component: {
            id: name,
            name,
            passProps
          }
        }],
      },
    });

  };


  dismissAllModal = async () => {

    await Navigation.dismissAllModals();
    this.currentStack = CustomNavigation.MAIN_STACK;
  };



  goBack = () => {
    (async () => {
      try {
        await this.pop();
      } catch (error) {
        BackHandler.exitApp();
      }
    })();
    return true;
  };

  popStack = () => {
    this.lastComponentInMainStack = undefined;
    this.firstComponentNewInStack = undefined;
    this.currentStack = CustomNavigation.MAIN_STACK;
    return this.dismissAllModal();
  }

  setStack = (stackName: string, screenName: string, passProps?: Object) => {
    this.lastComponentInMainStack = this.currentComponentId;
    this.firstComponentNewInStack = screenName;
    this.currentStack = stackName;
    return this.showModal(screenName, passProps, stackName)
  }

  registerBackHandlerListener = () => {
    Navigation.events().registerNavigationButtonPressedListener(() => {
      console.log("navigation button");
    });
    BackHandler.addEventListener('hardwareBackPress',
      this.goBack
    );
  };



  registerDidAppearListener = () => {
    Navigation.events().registerComponentDidAppearListener(
      ({ componentId, componentName }) => {
        console.log('>>>>didAppearListener', componentId);
        console.log('componentName', componentName);
        this.currentScreen = componentName;
        this.currentComponentId = componentId;
      },
    );
  };


  registerDidDisappearListener = () => {
    Navigation.events().registerComponentDidDisappearListener(
      ({ componentName }) => {
        console.log('>>>>didDisappearListener', componentName);
        this.prevScreen = componentName;
      },
    );
  };


  registerCommandCompletedListener = () => {
    Navigation.events().registerCommandCompletedListener(
      ({ commandId }) => {
        this.lastCommand = commandId.replace(/[0-9]/g, '');

        if (this.lastCommand === 'showModal') {
          this.modalIsOn = true;
        } else if (
          this.lastCommand === 'dismissModal' ||
          this.lastCommand === 'dismissAllModals'
        ) {
          this.modalIsOn = false;
        }
      },
    );
  };

}

