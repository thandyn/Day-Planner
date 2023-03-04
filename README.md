# Day-Planner
Hello. 
For this project, I collaborated with a classmate, Dyllan. With the day planner, it'll be used for people who have busy schedules and want to organize their work better.  We added functions to a day planner such as saving a task/work on an hour block. The hour block will change as the day goes on. Greyed out blocks are time that have passed. Red block is the current time. Green blocks are times that has not passed yet. I added more time passed the normal work schedule just in case if anyone can use this. 

![alt text](/assets/image/ss1.PNG)

Here we made a variable saveBtns to target all of the save buttons in our HTML since there are 16 save buttons total. We ran it through a for loop to give the button a function to take key and value of whatever is in the text area of the HTML and stored it into local storage

![alt text](/assets/image/ss2.PNG) 

For this function, we made 2 variables. timeNow will take the current time using DayJS and containerTime will take all the text area in the HTML. We made another for loop to have each text area correspond with the current time. We made an IF statement to assign the text area different class which give the text area different color based on the current time. 

![alt text](/assets/image/ss3.PNG)

Our last for loop is to make get all of the local storage and to keep it from disappearing when we refresh the page. The last line of the is to keep the current date and time for the user to see the current time and date. 

https://thandyn.github.io/Day-Planner/