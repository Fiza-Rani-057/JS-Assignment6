//  Question 1

 document.write( "<h1>" + "Question 1" + "<br>"  + "</h1>");

 var a = 10;

 document.write("Result:" + "<br>");
 document.write("The Result of a is:" + a + "<br>" + "<br>");


 document.write("The value of ++a is:" + (++a) + "<br>");
 document.write("Now the value of a is:" + a + "<br>" + "<br>" );

 document.write("The value of a++ is: " + (a++)  + "<br>");
 document.write("Now the value of a is:" + a  + "<br>"  + "<br>");

 document.write("The Value of --a is:" + (--a)  +"<br>");
 document.write("Now the value of a is:" + a + "<br>"+ "<br>");

 document.write("The Value of a-- is:" + (a--) + "<br>");
 document.write("Now the value of a is:" + a  +"<br>" +"<br>"); 

//  Question 2 
 
document.write( "<h1>" + "Question 2" + "<br>"  + "</h1>");

 var b = 1, c = 2;
 var result = --c  - --b +  ++b +  b--; 

 document.write("a = " + c + "<br>");
 document.write("b = " + b + "<br>");
 document.write("Result:" + result);

// Question 3 
    
document.write( "<h1>" + "Question 3" + "<br>"  + "</h1>");

 var userName = prompt("Enter your name");

 document.write("Hello"  + " "+ userName);

//  Question 4 & 5

 document.write( "<h1>" + "Question 4" + "<br>"  + "</h1>");

 var number = parseInt(prompt("Enter a number :", "5"));

 document.write(number* 1 + "<br>");
 document.write(number* 2 + "<br>");
 document.write(number* 3 + "<br>");
 document.write(number* 4 + "<br>");
 document.write(number* 5 + "<br>");
 document.write(number* 6 + "<br>");
 document.write(number* 7 + "<br>");
 document.write(number* 8 + "<br>");
 document.write(number* 9 + "<br>");
 document.write(number* 10 + "<br>");

//  Question 6 & 7
 
  document.write( "<h1>" + "Question 5" + "<br>"  + "</h1>");

//    subjects name 

 var sub1 = prompt("Enter first subject name");
 var sub2 = prompt("Enter second subject name");
 var sub3 = prompt("Enter third subject name");

 var totalMarks = 100;
    
//    obtained marks 

 var obtained1 = parseInt(prompt("Enter obtained marks of:"  + sub1));
 var obtained2 = parseInt(prompt("Enter obtained marks of:"  + sub2));
 var obtained3 = parseInt(prompt("Enter obtained marks of:" + sub3));

// percentage of each subject 
  
var per1 = (obtained1 / totalMarks) * 100;
var per2 = (obtained2 / totalMarks) * 100;
var per3 = (obtained3 / totalMarks) * 100;

//  percentage for all subjects

var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarksAll = totalMarks * 3;
var totalPercentage = (totalObtained / totalMarksAll) * 100;

//   print using table 

 document.write("<table>");

 document.write("<tr>");
 document.write("<th> Subject </th>");
 document.write("<th>Total Marks </th>");
 document.write("<th>Obtained Marks </th>");
 document.write("<th> Percentage</th>");
 document.write("</tr>");

 document.write("<tr>");
 document.write("<td>" + sub1 + "</td>");
 document.write("<td>" + totalMarks + "</td>");
 document.write("<td>" + obtained1 + "</td>");
 document.write("<td>" +  per1 + "</td>");
 document.write("</tr>");

 
 document.write("<tr>");
 document.write("<td>" + sub2 + "</td>");
 document.write("<td>" + totalMarks + "</td>");
 document.write("<td>" + obtained2 + "</td>");
 document.write("<td>" +  per2 + "</td>");
 document.write("</tr>");

 
 document.write("<tr>");
 document.write("<td>" + sub3 + "</td>");
 document.write("<td>" + totalMarks + "</td>");
 document.write("<td>" + obtained3 + "</td>");
 document.write("<td>" +  per3 + "</td>");
 document.write("</tr>");

 document.write("<tr>");
 document.write("<th>Total</th>");
 document.write("<th>" + totalMarksAll + "</th>");
 document.write("<th>" + totalObtained + "</th>");
 document.write("<th>" + totalPercentage + "%</th>");
 document.write("</tr>");

 document.write("</table>");
