import * as yup from "yup";
import I18n from "react-native-i18n";

export const buildValidationSchema = (formik) =>
    yup.object().shape({

        name: yup.string().trim().required(I18n.t("signup-field-required")),
        email: yup.string().trim().required(I18n.t("signup-field-required")),
        password: yup.string().trim().required(I18n.t("signup-field-required")),
        age: yup.string().trim().required(I18n.t("signup-field-required")),


    });
