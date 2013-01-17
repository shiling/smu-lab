# SMU Lab with Action.IO

1. Fork this repository to your own GitHub Account
2. Log in to Action.IO and create a new box using the Node.JS template
3. Clone your repository inside your box using the command `git clone
   git://github.com/xyz/smu-lab.git`
4. Press Ctrl-Shift-R (or click 'Refresh Tree' in the File menu) to
   update your file browser.
5. Switch to the console on the bottom, cd into the `smu-lab` directory
   and run `node stack.js`
6. Un-comment the block of tests under `push` and run your tests again
   (they will fail!)
7. Fix the tests, run them again and make them pass
8. Un-comment the block of tests under `pop` and run your tests again
   using `node stack.js` (they will fail!)
9. Fix the tests, run them again and make them pass
10. Once all tests are passing, commit your code by running `git add
    stack.js` and running `git commit -m`
11. Choose a meaningful commit message
12. Once you're done, push your changes back to GitHub by running `git
    push origin master` 

