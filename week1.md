# Week1 (2018/06/11 - 2018/06/17)

## Summary

1. almost finished impersonate feature, will do some small change like add impersonated user name as header in impsersonate mode
2. almost finished home page, will get feedback from dan and see if there is any other thing we need to change
3. in grid, started adding save button to allow user to save the grid setting in local. (didn't see design)
4. some stlye change following dan's feedback.
5. data indicator mechanism changed 

## Detail
- [ ] Impersonate
    - [x] Implement UI of the Impersonate Modal
    - [x] The auto suggestion feature (auto complete by username)
    - [x] Apply the userlist api on modal when user is going to search user
    - [x] implement logic allow user to enter username or select a full name in dropdown menu to get token
    - [x] rewrite one more router rule to match impersonate URL and store impoersonateToken in localtorage
    - [x] Hard code impersonated user to parent portal.
    - [x] Discuss with Avi and see how to know impersonated user's portals.
    - [x] Add current roles checkbox and allow user to filter them.
    - [x] Show message `Impersonate in progress` on impersonate mode
- [ ] Notification
    - [x] Implement UI of the Notification Panel
    - [x] Apply the API to show user's notification messages
    - [x] notification detail change (removed due-date, change child name to my notification)
    - [x] Redirect to the corresponding panel or external link on clicking notification
    - [x] Show number of notifications on the top of children's name
- [ ] Carousel
    - [x] Implement UI of the Carousel panel
    - [x] Make it mobile responsive
    - [x] Make it automatically switch slides and apply some animations
    - [x] Implement Feature that user could drag the mouse to navigate the slides
    - [x] Apply the API to show user's events on carousel
- [ ] Grid-control
    - [x] group sum/average/max/min feature
    - [x] allow user to save order of columns in his machine
    - [ ] allow user to save selection columns in his machine
- [ ] Feedback from Dan
    - [x] Some required adjustments on text spaces and panel margins
    - [x] Some required adjustments on panel border colors, opacity
    - [x] Update website icon and title
    - [x] Make error / success message responsive on mobile layout
- [ ] data indicator
    - [x] discusse data indicator logic, require more APIs.
    - [x] call panel dataFlag API to update the view that has data after fitering
