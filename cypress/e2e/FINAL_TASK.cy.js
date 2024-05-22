import { AutoPracticForm } from "../pageObjects/AutoPracticForm";


describe('FINAL TASK', () => {

  context("Selectable", () => {

    beforeEach(() => {
      AutoPracticForm.visit();
    });

    it('Scenario 1', () => {
      // Input all the necessary information 
      AutoPracticForm.NameInput.type("Janis"); 
      AutoPracticForm.SurnameInput.type("Berzins"); 
      AutoPracticForm.EmailInput.type("janis@berzins.lv");
      AutoPracticForm.PhoNumberInput.type("1234567890");
      AutoPracticForm.MaleRadio.click();
      AutoPracticForm.AddressInput.type("Liiigas iela 99 aa 11")

      // Set the - Date of Birth - with Calendar widget to - 28th of February, 1930
      AutoPracticForm.DateInput.click();
      AutoPracticForm.DateYearSelect.select("1930");
      AutoPracticForm.DateMonthSelect.select("February");
      AutoPracticForm.DateDay28Select.click();

      // Set Subjects to Economics.
      AutoPracticForm.SubjectsInput.type("Economics").type("{enter}");

      // Set Hobbies to Music.
      AutoPracticForm.MusicRadio.click();

      // Upload an image of your choice.
      AutoPracticForm.UploadImage.selectFile("pictures/picture.jpg")

      // Set State to NCR.
      AutoPracticForm.StateSelect.click();
      AutoPracticForm.NCRStateItem.click();

      // Set City to Delhi.
      AutoPracticForm.CitySelector.click();
      AutoPracticForm.DelhiCityItem.click();

      // Click Submit.
      AutoPracticForm.SubmitButton.click();

      // Validate that each Labeled row contains the correct information.
      AutoPracticForm.StudentNameRow.should(
        "contain",
        "Janis Berzins"
      );
      AutoPracticForm.EmailRow.should(
        "contain",
        "janis@berzins.lv"
      );
      AutoPracticForm.GenderRow.should(
        "contain",
        "Male"
      );
      AutoPracticForm.MobileRow.should(
        "contain",
        "1234567890"
      );
      AutoPracticForm.DateRow.should(
        "contain",
        "28 January,1930"
      );
      AutoPracticForm.SubjectsRow.should(
        "contain",
        "Economics"
      );
      AutoPracticForm.HobbiesRow.should(
        "contain",
        "Music"
      );
      AutoPracticForm.PicturesRow.should(
        "contain",
        "picture.jpg"
      );
      AutoPracticForm.AddressRow.should(
        "contain",
        "Liiigas iela 99 aa 11"
      );
      AutoPracticForm.StateCityRow.should(
        "contain",
        "NCR Delhi"
      );


    })

  });

})