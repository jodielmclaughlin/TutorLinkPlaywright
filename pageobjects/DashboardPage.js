export class DashboardPage{
constructor(page){
        this.page = page;
        this.titleText = page.locator("h1")
        
    }

    

}
module.exports = { DashboardPage };