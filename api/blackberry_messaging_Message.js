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
*       The Message object is an instance object, where if a new instance is desired, it must be created using the new keyword.
*     </p></div>
* @toc {Message} Message 
* @BB50+
* @class The Email Message object represents a message on the BlackBerry device. This class can be created and used when launching the new message screen using the invoke API or for direct interaction with the message list storage function.
* @featureID blackberry.message
* @featureID blackberry.identity
* @featureID blackberry.find
* @constructor The constructor will create a new instance of the Message for the targeted recipient. 
* @param {blackberry.identity.Service} [service] optional parameter that specifies the type of service that is expected.  This value can specify the email service to create an email message for.  If no parameter is specified the default email service will be used.
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   var message = new blackberry.message.Message();
*   message.toRecipients = &quot;noone@blackberryWidgets.com&quot;;
*   message.subject = &quot;Hello&quot;;
*   message.body = &quot;World&quot;;
*   message.send();
* &lt;&sol;script&gt;
*/
blackberry.message.Message = function(service) { };

/**
* Constant representing the UNKNOWN status. The current status cannot be determined. 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_UNKNOWN = -1;

/**
* Constant representing the SAVED status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_SAVED = 0;

/**
* Constant representing the DRAFT status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_DRAFT = 1;

/**
* Constant representing the SENT status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_SENT = 2;

/**
* Constant representing the ERROR status 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.STATUS_ERROR_OCCURED = 3;

/**
* Constant representing a HIGH priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.PRIORITY_HIGH = 0;

/**
* Constant representing a MEDIUM priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.PRIORITY_MEDIUM = 1;

/**
* Constant representing a LOW priority 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.PRIORITY_LOW = 2;

/**
* Constant representing the INBOX folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_INBOX = 0;

/**
* Constant representing the SENT folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_SENT = 1;

/**
* Constant representing the DRAFT folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_DRAFT = 2;

/**
* Constant representing the OUTBOX folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_OUTBOX = 3;

/**
* Constant representing the DELETED folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_DELETED = 4;

/**
* Constant representing an OTHER folder 
* @type Number
* @constant
* @BB50+
*/
blackberry.message.Message.FOLDER_OTHER = 5;

/**
* @name blackberry.message.Message.find^1
* @function
* @description This method looks up the messages that matches the expression provided. 
* @param {blackberry.find.FilterExpression} [filter] optional parameter that defines the search criteria for the find.  If no value is provided the method will return all the Messages on the device for the service provided.
* @param {Number} [maxReturn] optional integer parameter specifying the maximum number of results to return from the find.  If no value is specified, it will return all results found.
* @param {blackberry.identity.Service} [service] optional parameter to define which service you wish to search for your messages. If not provided the default service for messages will be used.
* @returns {Message[]}
* @BB50+
*/
/**
* @name blackberry.message.Message.find
* @function
* @description This method looks up the messages that matches the expression provided.  
* @param {String} [filter] Optional expression parameter that defines the search criteria for the find.  If no value is provided the method will return all the Messages on the device. (Must be stringified and put in the data of the xhr call)
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
 *     "messagesFound" : &lt;array of Message objects that satisfy the search criteria&gt;
 *   }
 * }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function findMessage(){
*              var filter = new blackberry.find.FilterExpression("body", "==", "World");
*              var postdata = "filter=" + JSON.stringify(filter) + "&" + "isAscending=true";	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/message/find",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="findMessage();" value="Find Message"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.message.Message.find = function(filter,maxReturn,service) { };

/**
* @name blackberry.message.Message.save
* @function 
* @description This method will save the changes made to the Message object. 
* @param {String} message The specified javascript message object that needs to be saved. (Must be stringified and put in the data of the xhr call)
* @returns {Object Literal}
* {
*   "data" : {
*     "message" : "&lt;messageJSON that was passed&gt;",
*   }
* }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function saveMessage(){
*              var message = new blackberry.message.Message();  
*                 message.toRecipients = "noone@blackberryWidgets.com"; 
*                 message.subject = "Hello";
*                 message.body = "World";   
*              var postdata = "message=" + JSON.stringify(message); 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/message/save",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="saveMessage();" value="Save Message"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*
*/
blackberry.message.Message.save = function() { };

/**
* @name blackberry.message.Message.remove
* @function 
* @description This method will remove a Message from the PIM storage.
* @param {String} message The specified javascript message object that needs to be removed. (Must be stringified and put in the data of the xhr call)
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function removeMessage(){
*              var message = blackberry.message.Message.find();    
*              var postdata = "message=" + JSON.stringify(message[0]); 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/message/remove",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="removeMessage();" value="Remove Message"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.message.Message.remove = function() { };

/**
* @name blackberry.message.Message.send
* @function 
* @description This method will send the message to its recipients.
* @param {String} message The specified javascript message object that needs to be sent. (Must be stringified and put in the data of the xhr call)
* @returns {Object Literal}
* {
*   "data" : {
*     "message" : "&lt;message that was passed&gt;",
*   }
* }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function sendMessage(){
*              var message = blackberry.message.Message.find();    
*              var postdata = "message=" + message; 	
*              $.ajax({
*                  type: "post",
*                  url: "http://webworks/blackberry/message/send",
*                  data: postdata
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="sendMessage();" value="Send Message"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.message.Message.send = function() { };

/**
* This method will save the changes made to the message object. 
* @returns {void}
* @BB50+
*/
blackberry.message.Message.prototype.save = function() { };

/**
* This method will send the message to its recipients. 
* @returns {void}
* @BB50+
*/
blackberry.message.Message.prototype.send = function() { };

/**
* This method will remove a message from the PIM storage. 
* @returns {void}
* @BB50+
*/
blackberry.message.Message.prototype.remove = function() { };

/**
* Contains a list of the addresses that this message should be sent to. The list of addresses is delimited by white spaces (for example, space or &apos;&bsol;n&apos;), a semicolon, or a comma. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.toRecipients = { };

/**
* Contains a list of the addresses that this message should be cc&apos;d to; they are delimited by white spaces (for example, space or &apos;&bsol;n&apos;), a semicolon, or a comma. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.ccRecipients = { };

/**
* Contains a list of the addresses that this message should be bcc&apos;d to; they are delimited by white spaces (for example, space or &apos;&bsol;n&apos;), a semicolon, or a comma. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.bccRecipients = { };

/**
* Contains the subject of the message. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.subject = { };

/**
* Contains the body of the message. 
* @type String
* @BB50+
*/
blackberry.message.Message.prototype.body = { };

/**
* Contains the address that this message is sent from. This field is read-only; it is automatically filled in for created messages once they are sent. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.from = { };

/**
* Contains the address that the reply to this message should be sent to. 
* @type String
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.replyTo = { };

/**
* Specifies which folder this message is in. This field is read-only. Created messages that are sent are put in the Sent folder. Can be one of the the FOLDER_* constants. 
* @type Number
* @BB50+
*/
blackberry.message.Message.prototype.folder = { };

/**
* Specifies the priority of the message. Can be one of the PRIORITY_* constants. 
* @type Number
* @BB50+
*/
blackberry.message.Message.prototype.priority = { };

/**
* Specifies the status of the message. Can be one of the STATUS_* constants. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.status = { };

/**
* Contains the unique identifier for this message. 
* @type Number
* @readOnly
* @BB50+
*/
blackberry.message.Message.prototype.uid = { };


