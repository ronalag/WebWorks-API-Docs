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
*       The Memo object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {PIM} Memo 
* @BB50+
* @class The Memo object is used to represent an entry in the MemoPad application.
* @featureID blackberry.pim.Memo
* @featureID blackberry.find
* @constructor Constructor for a new Memo object. 
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   &sol;&sol; Create the Memo 
*   var memo = new blackberry.pim.Memo(); 
*   memo.title = &quot;Reminder To Self&quot;; 
*   memo.note = &quot;Don&apos;t forget to get your brakes fixed!!&quot;; 
*   memo.save(); 
* &lt;&sol;script&gt;
*/
blackberry.pim.Memo = function() { };

/**
* @name blackberry.pim.Memo.find^1
* @function
* @description This method finds the memo that matches the regular expression provided. 
* @param {blackberry.find.FilterExpression} [filter] Optionalexpression parameter that defines the search criteria for the find.  If no value is provided the method will return all the Memos on the device.
* @param {String} [orderBy] Optional&apos;orderBy&apos; parameter specifying the field which the results will be sorted by. If &apos;isAscending&apos; is not supplied or &apos;isAscending&apos; is true, the sort results will be in an ascending order. If &apos;isAscending&apos; is false, the sort results will be in a descending order.
* @param {Number} [maxReturn] Optional integer parameter specifying the maximum number of results to return from the find.  If not supplied or set to -1, it will return all results found.
* @param {Boolean} [isAscending] Optional&apos;isAscending&apos; parameter specifying whether the sort order is ascending or descending. If not supplied or set to true, the results sorted by the field specified by &apos;orderBy&apos; will be in an ascending order. If set to false, the sort results will be in a descending order. If no &apos;orderBy&apos; value is specified, &apos;isAscending&apos; is neglected.
* @returns {Memo[]}
* @BB50+
*/
/**
* @name blackberry.pim.Memo.find
* @function
* @description This method finds the memos that match the regular expression provided. 
* @param {String} [filter] Optional expression parameter that defines the search criteria for the find.  If no value is provided the method will return all the Memos on the device. (Must be stringified and put in the data of the xhr call)
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
 *     "items" : &lt;array of Memo objects that satisfy the search criteria&gt;
 *   }
 * }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function findMemo(){
*              var filter = new blackberry.find.FilterExpression("title", "==", "Reminder To Self");
*              var postdata = "filter=" + JSON.stringify(filter) + "&" + "isAscending=true";	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/pim/Memo/find",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="findMemo();" value="Find Memo"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.Memo.find = function(filter,orderBy,maxReturn,isAscending) { };

/**
* @name blackberry.pim.Memo.save
* @function 
* @description This method will save the changes made to the Memo object. 
* @param {String} memo The specified javascript memo object that needs to be saved. (Must be stringified and put in the data of the xhr call)
* @returns {Object Literal}
* {
*   "data" : {
*     "memo" : "&lt;memoJSON that was passed&gt;",
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
*          function saveMemo(){
*              var memo = new blackberry.pim.Memo();  
*                 memo.title = "Reminder To Self"; 
*                 memo.note = "Don't forget to get your brakes fixed!!";   
*              var postdata = "memo=" + JSON.stringify(memo); 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/pim/Memo/save",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="saveMemo();" value="Save Memo"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*
*/
blackberry.pim.Memo.save = function() { };

/**
* @name blackberry.pim.Memo.remove
* @function 
* @description This method will remove a Memo from the PIM storage.
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
*          function removeMemo(){
*              var memolist = blackberry.pim.Memo.find();    
*              var postdata = "uid=" + memolist[0].uid; 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/pim/Memo/remove",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="removeMemo();" value="Remove Memo"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.Memo.remove = function() { };


/**
* This method will save the changes made to the memo object. 
* @returns {void}
* @BB50+
*/
blackberry.pim.Memo.prototype.save = function() { };

/**
* This method will remove a memo from the PIM storage. 
* @returns {void}
* @BB50+
*/
blackberry.pim.Memo.prototype.remove = function() { };

/**
* The title of the memo. 
* @type String
* @BB50+
*/
blackberry.pim.Memo.prototype.title = { };

/**
* The body text of the memo. 
* @type String
* @BB50+
*/
blackberry.pim.Memo.prototype.note = { };

/**
* Contains the unique ID of the object. It is the primary key and would be automatically generated. This field is read-only. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.pim.Memo.prototype.uid = { };

/**
* The list of categories associated to the memo. 
* @type String
* @BB50+
*/
blackberry.pim.Memo.prototype.categories = { };


