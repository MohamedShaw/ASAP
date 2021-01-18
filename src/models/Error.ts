import { InvalidFieldsError } from "./InvalidFields"

export class FacebookSDKError extends Error {
  constructor(message?: string) { super(message) }
}

export class FacebookCancelled extends Error {
  constructor(message?: string) { super(message) }
}


export class NetworkError extends Error {
  constructor(message?: string) { super(message) }
}



export class InvalidPhoneNumber extends Error {
  constructor(message?: string) { super(message) }
}

export class PhoneNumberAlreadyUsed extends Error {
  public username = ''
  constructor(username: string, message?: string) {
    super(message)
    this.username = username
  }
  
  toString(): String{
    return "PhoneNumberAlreadyUsed";
  }
  

}

export class InvalidFields extends Error {
  constructor(public fields: InvalidFieldsError, message?: string) {
    super(message)
  }
}

export class InvalidPassword extends Error {
  constructor(message?: string) { super(message) }
}

export class PhoneAlreadyVerified  extends Error {
  constructor(message?: string) { super(message) }
}
export class WrongVerifyCode  extends Error {
  constructor(message?: string) { super(message) }
}
 
