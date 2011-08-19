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
*       The functionality in this namespace allows you to access and manipulate categories defined for in the Personal Information Management (PIM) database.
*     </p></div>
* @toc {PIM} Category 
* @BB50+
* @namespace The Category object defines APIs necessary to access and manipulate categories in the PIM  database.
* @featureID blackberry.pim.category
*/
blackberry.pim.category = { };

/**
* @name blackberry.pim.category.getCategories^1
* @function
* @description Returns the categories defined for the PIM database. If there are no categories defined for the PIM database, then a zero length array is returned. 
* @returns {String[]}
* @BB50+
*/
/**
* @name blackberry.pim.category.getCategories
* @function
* @description Returns the categories defined for the PIM database. If there are no categories defined for the PIM database, then a zero length array is returned. 
* @returns {Object Literal}
* {
*   "data" : {
*     "categories" : &lt;array of categories &gt;
*   }
* }
* @BB50+
* @uri
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function getCategories(){	
*              $.ajax({
*                  type: "get",
*                  url: "http://webworks/blackberry/pim/category/get",
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="getCategories();" value="get Categories"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.category.getCategories = function() { };

/**
* @name blackberry.pim.category.addCategory^1
* @function
* @description Adds the provided category to the PIM database. Category names are case sensitive. 
* @param {String} categoryName String representing a category.
* @returns {void}
* @BB50+
* @example
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   function createNewCategory(newCategoryName) {
*     blackberry.pim.category.addCategory(newCategoryName);
*   }
* &lt;&sol;script&gt;
*/
/**
* @name blackberry.pim.category.addCategory
* @function
* @description Adds the provided category to the PIM database. Category names are case sensitive. 
* @param {String} categoryName String representing a category.
* @returns {void}
* @BB50+
* @uri 
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function addCategories(){	
*              $.ajax({
*                  type: "get",
*                  url: "http://webworks/blackberry/pim/category/add?categoryName=category1",
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="addCategories();" value="add Categories"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.category.addCategory = function(categoryName) { };

/**
* @name blackberry.pim.category.deleteCategory^1
* @function
* @description Deletes the indicated category from the PIM database. If the indicated category is not in the PIM database, this method is treated as successfully completing. Category names are case sensitive. 
* @param {String} categoryName String category.
* @returns {void}
* @BB50+
*/
/**
* @name blackberry.pim.category.deleteCategory
* @function
* @description Deletes the provided category to the PIM database. Category names are case sensitive. 
* @param {String} categoryName String category.
* @returns {void}
* @BB50+
* @uri 
* @example 
* &lt;html&gt;
* &lt;head&gt;
*     &lt;script type="text/javascript" src="js/jquery-1.4.2.js" &gt;&lt;/script&gt; 
*     &lt;script type="text/javascript"&gt;	
*          function deleteCategories(){	
*              $.ajax({
*                  type: "get",
*                  url: "http://webworks/blackberry/pim/category/delete?categoryName=category1",
*               });
*           }
*      &lt;/script&gt;    
*&lt;/head&gt;
*&lt;body&gt;
*    &lt;input type="button" onclick="deleteCategories();" value="delete Categories"/&gt; 		 
*&lt;/body&gt;
*&lt;/html&gt;
*/
blackberry.pim.category.deleteCategory = function(categoryName) { };


