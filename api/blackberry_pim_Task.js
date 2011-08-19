/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


/**
* <div><p>
*       The Task object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Task 
* @BB50+
* @class The Task object represents a Task entry that would be in your PIM task list.  This Task object can be used for manipulating Task PIM information.
* @featureID blackberry.find
* @featureID blackberry.pim.Recurrence
* @featureID blackberry.pim.Reminder
* @featureID blackberry.pim.Task
* @constructor Constructor for a new Task object  
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Create our Task 
*   var newTask = new blackberry.pim.Task(); 
*   newTask.summary = &quot;Get Groceries&quot;; 
*   newTask.note = &quot;Pick up eggs, and Milk&quot;;  
*   newTask.priority = blackberry.pim.Task.PRIORITY_HIGH;   
*   newTask.save(); 
* &lt;&sol;script&gt;
*/

blackberry.pim.Task = function() { };

/**
* Constant representing the NOT_STARTED status 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.NOT_STARTED = 0;

/**
* Constant representing the IN_PROGRESS status 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.IN_PROGRESS = 1;

/**
* Constant representing the COMPLETED status 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.COMPLETED = 2;

/**
* Constant representing the WAITING status 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.WAITING = 3;

/**
* Constant representing the DEFERRED status 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.DEFERRED = 4;

/**
* Constant representing the HIGH priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.PRIORITY_HIGH = 0;

/**
* Constant representing the NORMAL priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.PRIORITY_NORMAL = 1;

/**
* Constant representing the LOW priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.pim.Task.PRIORITY_LOW = 2;

/**
* @name blackberry.pim.Task.find^1
* @function
* @description This method finds the tasks that match the regular expression provided. 
* @param {blackberry.find.FilterExpression} [filter] Optional expression parameter that defines the search criteria for the find.  If no value is provided the method will return all the Tasks on the device. 
* @param {String} [orderBy] Optional &apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not specified or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] Optional integer parameter specifying the maximum number of results to return from the find.  If not specified or set to -1, it will return all results found. 
* @param {Boolean} [isAscending] Optional &apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not specified or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected. 
* @returns {Task[]}
* @BB50+
*/
/**
* @name blackberry.pim.Task.find
* @function
* @description This method finds the tasks that match the regular expression provided. 
* @param {String} [filter] Optional expression parameter that defines the search criteria for the find.  If no value is provided the method will return all the Tasks on the device. (Must be stringified and put in the data of the xhr call)
* @param {String} [orderBy] Optional &apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not specified or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.(Must be put in the data of the xhr call)
* @param {String} [maxReturn] Optional integer parameter specifying the maximum number of results to return from the find.  If not specified or set to -1, it will return all results found. (Must be put in the data of the xhr call)
* @param {String} [isAscending] Optional &apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not specified or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected. (Must be put in the data of the xhr call)
 * @returns {Object Literal}
 * {
 *   "data" : {
 *     "filter" : "&lt;FilterExpression JSON that was passed&gt;",
 *     "orderBy" : "&lt;field name that was passed&gt;",
 *     "maxReturn" : &lt;maximum number of results that was passed&gt;,
 *     "isAscending" : &lt;isAscending flag that was passed&gt;,
 *     "items" : &lt;array of Task objects that satisfy the search criteria&gt;
 *   }
 * }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function findTask(){
*              var filter = new blackberry.find.FilterExpression("summary", "==", "Get Groceries");
*              var postdata = "filter=" + JSON.stringify(filter) + "&" + "isAscending=true";	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/pim/Task/find",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="findTask();" value="Find Task"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.Task.find = function(filter,orderBy,maxReturn,isAscending) { };


/**
* @name blackberry.pim.Task.save
* @function 
* @description This method will save the changes made to the Task object. 
* @param {String} task The specified javascript task object that needs to be saved. (Must be stringified and put in the data of the xhr call)
* @returns {Object Literal}
* {
*   "data" : {
*     "task" : "&lt;task JSON that was passed&gt;",
*     "uid" : "&lt;uid that was passed&gt;"
*   }
* }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function saveTask(){
*              var newTask = new blackberry.pim.Task(); 
*                 newTask.summary = "Get Groceries"; 
*                 newTask.note = "Pick up eggs, and Milk";  
*                 newTask.priority = blackberry.pim.Task.PRIORITY_HIGH;  
*              var postdata = "task=" + JSON.stringify(newTask); 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/pim/Task/save",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="saveTask();" value="Save Task"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*
*/
blackberry.pim.Task.save = function() { };

/**
* @name blackberry.pim.Task.remove
* @function 
* @description This method will remove a Task from the PIM storage.
* @param {String} uid The specified unique ID of the object that needs to be removed. (Must be put in the data of the xhr call)
* @returns {Object Literal}
* {
*   "data" : {
*     "uid" : "&lt;uid that was passed&gt;",
*   }
* }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function removeTask(){
*              var tasklist = blackberry.pim.Task.find();    
*              var postdata = "uid=" + tasklist[0].uid; 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/pim/Task/remove",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="removeTask();" value="Remove Task"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.Task.remove = function() { };

/**
* This method will save the changes made to the task object. 
* @returns {void}
* @BB50+
*/
blackberry.pim.Task.prototype.save = function() { };

/**
* This method will remove a task from the PIM storage. 
* @returns {void}
* @BB50+
*/
blackberry.pim.Task.prototype.remove = function() { };


/**
* Contains a brief description of the task. 
* @type String
* @BB50+
*/
blackberry.pim.Task.prototype.summary = { };

/**
* Contains a more complete description than the summary field. 
* @type String
* @BB50+
*/
blackberry.pim.Task.prototype.note = { };

/**
* Current status of this task. Value can be one of the &apos;Status&apos; constants. Default value is NOT_STARTED. 
* @type Number
* @BB50+
*/
blackberry.pim.Task.prototype.status = { };

/**
* The due date for this task. 
* @type Date
* @BB50+
*/
blackberry.pim.Task.prototype.due = { };

/**
* This specifies the priority of the task.  Value can be one of the &apos;Priority&apos; constants. Default value is PRIORITY_NORMAL. 
* @type Number
* @BB50+
*/
blackberry.pim.Task.prototype.priority = { };

/**
* Contains the unique ID of the object. It is the primary key and would be automatically generated. This field is read-only. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.pim.Task.prototype.uid = { };

/**
* This is the rule to store how this task should be repeated if any. 
* @type Recurrence
* @BB50+
*/
blackberry.pim.Task.prototype.recurrence = { };

/**
* This is the rule to store how the user should be reminded about the task. 
* @type Reminder
* @BB50+
*/
blackberry.pim.Task.prototype.reminder = { };

/**
* The list of categories associated to the task. 
* @type {String[]}
* @BB50+
*/
blackberry.pim.Task.prototype.categories = { };


