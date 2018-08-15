describe("Julie app test", () =>{
 
it("aadition", ()=> {

   browser.get("http://juliemr.github.io/protractor-demo/");
   browser.element(by.model("first")).sendKeys('1');
   browser.element(by.model("second")).sendKeys('4');

   element(by.css('[ng-click="doAddition()"]')).click();

   browser.element(by.model("first")).sendKeys('3');
   browser.element(by.model("second")).sendKeys('4');

   element(by.css('[ng-click="doAddition()"]')).click()
  
  
  
   browser.element(by.model("first")).sendKeys('4');
   browser.element(by.model("second")).sendKeys('4');

   element(by.css('[ng-click="doAddition()"]')).click().then(() => {

    browser.manage().window().maximize();
    browser.sleep('8000');
       
   }).catch((err) => {
    
    console.log("failed");
       
   });

    let value = browser.element(by.css("h2[class='ng-binding']")).getText();

    expect(value).toBe("8");
       
    
    browser.element.all(by.repeater("result in memory")).each(function(item){

        item.element(by.css("td:nth-child(3)")).getText().then(function(text){

            console.log(text);


        })
    });


  
   });
});


       
   






