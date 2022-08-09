public with sharing class ToDoListController {

    @AuraEnabled
    public static List<Task> getTasks(){

        return [Select Subject from Task where OwnerId =: userInfo.getUserId()];

    }

    
}
