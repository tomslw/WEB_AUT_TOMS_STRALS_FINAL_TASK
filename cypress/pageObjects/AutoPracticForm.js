import { BasePage } from "../pageObjects/BasePage";

export class AutoPracticForm extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get NameInput() {
    return cy.get("#firstName");
  }

  static get SurnameInput() {
    return cy.get("#lastName");
  }

  static get EmailInput() {
    return cy.get("#userEmail");
  }

  static get PhoNumberInput() {
    return cy.get("#userNumber");
  }

  static get MaleRadio() {
    return cy.get('label[for="gender-radio-1"]');
  }

  static get FemaleRadio() {
    return cy.get('label[for="gender-radio-2"]');
  }

  static get OtherRadio() {
    return cy.get('label[for="gender-radio-3"]');
  }

  static get DateInput() {
    return cy.get('#dateOfBirthInput');
  }

  static get DateYearSelect() {
    return cy.get('.react-datepicker__year-select');
  }

  static get DateMonthSelect() {
    return cy.get('.react-datepicker__month-select');
  }

  static get DateDay28Select() {
    return cy.get('.react-datepicker__day').contains("28");
  }

  static get SportsRadio() {
    return cy.get('label[for="hobbies-checkbox-1"]');
  }

  static get ReadingRadio() {
    return cy.get('label[for="hobbies-checkbox-2"]');
  }

  static get MusicRadio() {
    return cy.get('label[for="hobbies-checkbox-3"]');
  }

  static get SubjectsInput() {
    return cy.get('#subjectsInput');
  }

  static get AddressInput() {
    return cy.get('#currentAddress');
  }

  static get StateSelect() {
    return cy.get('#state');
  }

  static get NCRStateItem() {
    return cy.get('#react-select-3-option-0');
  }

  static get CitySelector() {
    return cy.get('#city');
  }

  static get DelhiCityItem() {
    return cy.get('#react-select-4-option-0');
  }

  static get SubmitButton() {
    return cy.get('#submit');
  }
  
  static get UploadImage() {
    return cy.get('#uploadPicture');
  }

  // labels to be checked
  static get StudentNameRow() {
    return cy.get('td').contains("Student Name").parent();
  }
  static get EmailRow() {
    return cy.get('td').contains("Student Email").parent();
  }
  static get GenderRow() {
    return cy.get('td').contains("Gender").parent();
  }
  static get MobileRow() {
    return cy.get('td').contains("Mobile").parent();
  }
  static get DateRow() {
    return cy.get('td').contains("Date of Birth").parent();
  }
  static get SubjectsRow() {
    return cy.get('td').contains("Subjects").parent();
  }
  static get HobbiesRow() {
    return cy.get('td').contains("Hobbies").parent();
  }
  static get PicturesRow() {
    return cy.get('td').contains("Picture").parent();
  }
  static get AddressRow() {
    return cy.get('td').contains("Address").parent();
  }
  static get StateCityRow() {
    return cy.get('td').contains("State and City").parent();
  }
  // static get GridButtonOne() {
  //   return cy.get(".list-group-item").contains("One");
  // }

}
