Extension: ctrl+shift+X :add Snippets
console.log() : 
chrome developer tools: webpack:// -> . -> src -> put debug points
Using VS Code for Debugging: https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular

Ionic StackController : it holds stack of pages <cached>
Ionic NavController : Injectable service

ionic + angualr Lifecycle methods:
    ngOnInit(); ngOnDestroy(); angular methods implents through interfaces
    ionViewWillEnter()
    ionViewDidEnter()
    ionViewWillLeave()
    ionViewDidLeave()
        -> No need to implement through interfaces 


      1. ngOnInit() -> first invoke this method , keep in cached 
      2. ionViewWillEnter()   :
      3. ionViewDidEnter()   : these three methods execute just befor page visible

      ionViewWillLeave(), ionViewDidLeave() these methods need some time to execute:

      4. ngOnInit() second page method execute
      5. ionViewWillLeave() : ion view will leave first page 
      6. ionViewWillEnter() : ion view will enter second page
      7. ionViewDidEnter()  : ion view did enter second page
      8. ionViewDidLeave()  : ion view did leave first page

      second page is visible............

      After press back button <it invoke destroy method: >

      9. ionViewWillLeave() : ion view will leave second page
      10.ionViewWillEnter() : ion view will enter first page
      11.ionViewDidEnter()  : ion view did enter first page
      12.ionViewDidLeave()  : ion view did leave second page
      13.ngOnDestroy()      : ng on Destroy second page

