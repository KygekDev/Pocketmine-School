---
id: inventoryhandler
title: InventoryHandler
sidebar_label: InventoryHandler
---
___
To create a Fake Inventory Handler we need to first add "use" statement
```
use muqsit\invmenu\InvMenuHandler; 
```

after that you have to add this in onEnable to register InvMenuHandler to handle Inventory
```
public function onEnable(){
    if(!InvMenuHandler::isRegistered()){
        InvMenuHandler::register($this);
    }
}
```
