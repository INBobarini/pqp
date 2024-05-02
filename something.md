

```mermaid
---
title: PQP Tables
---
classDiagram
    direction RL
    REQUIREMENT: name
    REQUIREMENT: type
    REQUIREMENT: description
    REQUIREMENT: source
    REQUIREMENT: F3quote
    REQUIREMENT: reqStatus
    REQUIREMENT: nominalValue
    REQUIREMENT: expectedValue
    REQUIREMENT: tolerance
    REQUIREMENT: create()
    REQUIREMENT: read()
    REQUIREMENT: update()
    REQUIREMENT: delete()

    OPERATION: machine
    OPERATION: operatorName
    OPERATION: status
    OPERATION: OpType
    OPERATION: PRODUCT 
    OPERATION: Quantity
    OPERATION: OpStatus
    OPERATION: create()
    OPERATION: read()
    OPERATION: update()
    OPERATION: delete()

    DOCUMENTATION: records
    DOCUMENTATION: procedures
    DOCUMENTATION: outsourcedAct
    DOCUMENTATION: drawings

    CHARACTERISTIC:value
    CHARACTERISTIC:uncertainty
    OpType: manufacture
    OpType: QCinspection
    OpType: Hold/Witness

    PRODUCT: description
    PRODUCT: CHARACTERISTIC


    PLAN: Requirements
    PLAN: Operations
    PLAN: AsignOpToReq()

    PLAN o-- REQUIREMENT
    PLAN o-- OPERATION
    OPERATION <|-- PRODUCT
    REQUIREMENT <|-- PRODUCT
    OPERATION <|--OpType

    


    
 