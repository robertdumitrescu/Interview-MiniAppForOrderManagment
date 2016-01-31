"use strict";

class orderModel {
    /**
     * @param orderData
     */
    constructor(orderData) {
        this.orderData = orderData;
        this.orderDataSize = this.orderData.length;
    }

    /**
     *
     * @param arrayWithDupes
     * @returns {Array.<T>}
     */
    removeDupes (arrayWithDupes) {
        return arrayWithDupes.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }

    /**
     *
     */
    updateDataSize() {
        this.orderDataSize = this.orderData.length;
    }

    /**
     *
     * @param arrayWithDupes
     * @returns {*}
     */
    removeDupesFromObjectArray (arrayWithDupes) {
        let usedObjects = {};

        for (let i=arrayWithDupes.length - 1;i>=0;i--) {
            var so = JSON.stringify(arrayWithDupes[i]);

            if (usedObjects[so]) {
                arrayWithDupes.splice(i, 1);

            } else {
                usedObjects[so] = true;
            }
        }
        return arrayWithDupes;
    }

    /**
     *
     * @param arrayWithDupes
     * @returns {*[]}
     */
    countNumberOfOccurances (arrayWithDupes) {
        let a = [], b = [], prev;

        arrayWithDupes.sort();
        for ( var i = 0; i < arrayWithDupes.length; i++ ) {
            if ( arrayWithDupes[i] !== prev ) {
                a.push(arrayWithDupes[i]);
                b.push(1);
            } else {
                b[b.length-1]++;
            }
            prev = arrayWithDupes[i];
        }

        return [a, b];
    }

    /**
     *
     * @param Array1
     * @param Array2
     * @returns {*}
     */
    mergeTwoArraysByIndex(Array1, Array2){
        let mergedArrays = [];
        if (Array1.length == Array2.length) {
            for (let iter = 0; iter < Array1.length; iter++) {
                mergedArrays.push({"a" : Array1[iter], "b" : Array2[iter]});
            }
        } else {
            return false;
        }

        return mergedArrays;
    };

    /**
     *
     * @param uniqueObjects
     * @param mergedOccurancesResult
     * @returns {Array}
     */
    associateOrderWithOccurances(uniqueObjects, mergedOccurancesResult){
        let associatedArrays = [];
        for (let iter = 0; iter < this.orderDataSize; iter++) {
            for (let iterUniq = 0; iterUniq < mergedOccurancesResult.length; iterUniq++) {
                if (this.orderData[iter].orderedItem == mergedOccurancesResult[iterUniq].a) {
                    associatedArrays.push(
                        {
                            "orderId" : this.orderData[iter].orderId,
                            "companyName" : this.orderData[iter].companyName,
                            "customerAddress" : this.orderData[iter].customerAddress,
                            "orderedItem" : this.orderData[iter].orderedItem,
                            "occurances" : mergedOccurancesResult[iterUniq].b
                        }
                    );
                }
            }
        }

        return associatedArrays;
    }

    /**
     *
     * @param arr
     * @param prop
     * @param reverse
     * @param numeric
     * @returns {*}
     */
    sortByProperty(arr, prop, reverse, numeric) {
        if (!prop || !arr) {
            return arr
        }
        var sort_by = function (field, rev, primer) {
            return function (a, b) {
                a = primer(a[field]), b = primer(b[field]);
                return ((a < b) ? -1 : ((a > b) ? 1 : 0)) * (rev ? -1 : 1);
            }

        };
        if (numeric) {
            arr.sort(sort_by(prop, reverse, function (a) {
                return parseFloat(String(a).replace(/[^0-9.-]+/g, ''));
            }));
        } else {
            arr.sort(sort_by(prop, reverse, function (a) {
                return String(a).toUpperCase();
            }));
        }
    }

    /**
     *
     * @param arrayWithDupesSorted
     * @returns {Array}
     */
    removeDupesAfterSortingDesc(arrayWithDupesSorted) {
        let uniqueArray = [];
        for (let iter = 0; iter < arrayWithDupesSorted.length; iter++) {

            if (iter == 0) {
                uniqueArray.push(arrayWithDupesSorted[iter]);
            } else if (arrayWithDupesSorted[iter].orderedItem !== arrayWithDupesSorted[iter-1].orderedItem)
                uniqueArray.push(arrayWithDupesSorted[iter]);
        }
        return uniqueArray;
    }

    /**
     *
     * @param arrayWithDupes
     * @returns {*}
     */
    removeDupesFromObjectArrayAndCount (arrayWithDupes) {
        let uniqueObjects = [];

        for (let iter = 0; iter < this.orderDataSize; iter++) {

            uniqueObjects.push(this.orderData[iter].orderedItem);

        }
        let result = this.countNumberOfOccurances(uniqueObjects);
        let mergedOccurancesResult = this.mergeTwoArraysByIndex(result[0], result[1]);
        let associatedArray = this.associateOrderWithOccurances(this.orderData, mergedOccurancesResult);
        this.sortByProperty(associatedArray, 'occurances', true, true);
        let uniqueArrayWithCount = this.removeDupesAfterSortingDesc(associatedArray);
        return uniqueArrayWithCount;
    }



    /**
     * @returns {Array}
     */
    getAllCompanies() {
        let allCompanies = [];


        for (let iter = 0; iter < this.orderDataSize; iter++) {
            allCompanies.push(this.orderData[iter].companyName);
        }

        allCompanies = this.removeDupes(allCompanies);

        return allCompanies;

    }

    /**
     * @returns {Array}
     */
    getAllAddresses() {
        let allAddresses = [];

        for (let iter = 0; iter < this.orderDataSize; iter++) {
            allAddresses.push(this.orderData[iter].customerAddress);
        }

        allAddresses = this.removeDupes(allAddresses);

        return allAddresses;

    }

    /**
     *
     * @param companyName
     * @returns {Array}
     */
    getOrdersForCompany(companyName) {
        let filteredOrdersByCompany = [];

        for (let iter = 0; iter < this.orderDataSize; iter++) {

            if (this.orderData[iter].companyName == companyName) {
                filteredOrdersByCompany.push(this.orderData[iter]);
            }
        }


        return filteredOrdersByCompany;

    };

    /**
     *
     * @param customerAddress
     * @returns {Array}
     */
    getOrdersForAddress(customerAddress) {
        let filteredOrdersByAddress = [];

        for (let iter = 0; iter < this.orderDataSize; iter++) {

            if (this.orderData[iter].customerAddress == customerAddress) {
                filteredOrdersByAddress.push(this.orderData[iter]);
            }
        }

        return filteredOrdersByAddress;

    };

    /**
     * @param queryData
     */
    getSearchedData(queryData) {

        let filteredOrdersByCompany = [];
        let filteredOrdersByAddress = [];
        let filteredData = [];

        if (queryData.currentCompany !== null) {
            filteredOrdersByCompany = this.getOrdersForCompany(queryData.currentCompany);
        }

        if (queryData.currentAddress !== null) {
            filteredOrdersByAddress = this.getOrdersForAddress(queryData.currentAddress);
        }

        filteredData = filteredOrdersByCompany.concat(filteredOrdersByAddress);
        filteredData = this.removeDupesFromObjectArray(filteredData);

        return filteredData;

    }

    /**
     * @returns {*}
     */
    getData(){
        return this.orderData;
    }
    /**
     *
     * @param orderId
     * @returns {*}
     */
    deleteOrderById(orderId) {
        for (let iter = 0; iter < this.orderDataSize; iter++) {
            if (this.orderData[iter].orderId == orderId.itemToBeDeleted) {
                this.orderData.splice(iter, 1);
                this.updateDataSize();
                break;
            }
        }

        return this.orderData;
    }

    getOrderedDataByOccurence() {

        return this.removeDupesFromObjectArrayAndCount(this.orderData);

    }

}

module.exports = orderModel;