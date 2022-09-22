import {TOTAL_SCREEN} from './commonUtilities';
import {Subject} from 'rxjs';

export default class scrollService{
    static scrollHandler =new scrollService();

    static currentScreenBroadCaster =new Subject()
    static currentScreenFadeIn = new  Subject()

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }
    scrollToHireMe= ()=>{
        let  contactMeScreen = document.getElementById("Contact Me")
            if (contactMeScreen) return;
            contactMeScreen.scrollIntoView({behavior: "smooth"})

        }
    scrollToHome= ()=>{
        let  homeScreen = document.getElementById("Home")
        if (homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }

    isElementInView =(elem, type)=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottem =rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0;
        let completelyVisible = elementTop >= 0 && elementBottom<= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;

                case "complete":
                    return completelyVisible
                    default:
                        return false
        }
   };

   checkCurrentScreenUnderViewport = (event)=>{
    if (!event || object.keys(event).length < 1)
    return;
    for (let screen of TOTAL_SCREEN){
        let screenFromDom = document.getElementById(screen.screen_name);
        if (!screenFromDom)
        continue;

        let fullyVisible = this.isElementInView(screenFromDom, "complete");
        let partiallyVisible = this.isElementInView(screenFromDom, "partial");

        if (fullyVisible || partiallyVisible){
            if (partiallyVisible && !screen.alreadyRendered) {
                ScrollService.currentScreenFadeIn.next ({
                    fadeInScreen: screen.screen_name,
                });
                screen['alreadyRendered'] = true;
                break;
            }
            if (fullyVisible){
                ScrollService.currentScreenBroadCaster.next({
                    screenInView: screen.screen_name,
                });
                break;
            }
        };
    }
   };

}