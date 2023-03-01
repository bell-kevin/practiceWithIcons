# Practice with Icons

In this project, you will work with borders, padding, margin, and icons. 

You have learned that you need to use the View component to enclose content that should appear together. You also have learned that the View component can have more style applied to it than other components. In this project, you will work with View to create a 3 x 3 board of icons. The only components you will need are View, StyleSheet, and the icon components. Each piece of the board is a View, which creates a square with a colored background, with something appearing in that square -- in this project, it will be an icon. 

Here is an example:

![icons.PNG](https://github.com/bell-kevin/practiceWithIcons/blob/main/icons.PNG)

 

Preparation: Start with a single colored square (a View with a background color), 100 units square (height and width are equal). Add a border of 5 units. Using a Text component, place a number or letter in that View. The letter or number will appear on top of the colored square. Add margin and/or padding to center that number or letter on the colored square. Once that works, delete the letter or number (the Text component). Create a second View, inside the first one, a smaller square (for example, use 50 for the height and width) that has a different background color, so it looks like one colored square on top of another larger colored square. Work with the padding and/or margin to get the smaller square centered inside the larger square. Next, enlarge this by putting 3 of these squares side by side, so it is a row of colored squares with another smaller colored square on top of each one. Use margin around the blocks so they don't touch each other, so it's clear there are 3 separate blocks in the row (see above). Add margin to put a small but visible amount of space between the blocks, as seen in the example.

Icons: Explore the MaterialCommunityIcons and Ionicons that are part the library "@expo/vector-icons". Review documentation at https://docs.expo.dev/guides/icons/,Links to an external site. and check out the icons at https://icons.expo.fyi/Links to an external site.. You can filter the list to see only Ionicons or only MaterialCommunityIcons. There must be 9 different icons from these 2 different icon sets; your selections cannot match the example exactly. Make sure they fit (not too big, not too small) and are centered on the box behind them. You may select the background color of each box, make sure the icons are clearly visible (don't use black icons on dark blue background, for example).

In the example above, the MaterialCommunityIcons are on the first and last row, named "death-star", "crown", "deathly-hallows", "space-invaders", "dna", "duck". The Ionicons are on the middle row, named "logo-android", "logo-tux", "pizza-outline". You may use some of those, but you may not exactly duplicate the example. Look for other interesting icons to display.

Take a screenshot similar to the example.

 ![p](https://github.com/bell-kevin/practiceWithIcons/blob/main/funIcons.PNG)

Submission: Zip together the screenshot and the root folder of the project, and submit a single zipped file.

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

Check out App.js here in the code files for the computer algorithm code.

## Reading: Storing Projects 

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
