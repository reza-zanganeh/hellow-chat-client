/** @format */
import { configure, defineRule } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import { email, required } from "@vee-validate/rules";
import fa from "./fa.json";
import { isPersianAlphabet, isNumber, isPhoneNumber } from "./custom-rules";

// define my rules
defineRule("required", required);
defineRule("email", email);
defineRule("phoneNumber", isPhoneNumber);
defineRule("persianAlphabet", isPersianAlphabet);
defineRule("number", isNumber);

// configure
configure({
  // Generates an Persian message locale generator
  generateMessage: localize("fa", fa),
});
