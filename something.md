

```mermaid
---
title: PQP Tables
---
classDiagram
    direction LR
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

    CHARACTERISTIC:value
    CHARACTERISTIC:uncertainty
    OpType: manufacture
    OpType: QCinspection
    OpType: Hold/Witness

    PRODUCT: description
    PRODUCT: CHARACTERISTIC


    Plan: Requirements
    Plan: Operations
    Plan: AsignOpToReq()

    Plan o-- REQUIREMENT
    Plan o-- OPERATION
    OPERATION <|-- PRODUCT
    REQUIREMENT <|-- PRODUCT
    OPERATION <|--OpType

    


    
 