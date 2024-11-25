export class Patient {
    patientID:              number;
    firstName:              string;
    lastName:               string;
    middleName:             string;
    genderID:               number;
    gpGenderID:             number;
    gender:                 string;
    languageID:             number;
    languageName:           string;
    dateOfBirth:            Date;
    mrn:                    string;
    email:                  string;
    remainOnLiveCall:       boolean;
    addOn:                  Date;
    setupDate:              Date;
    branchID:               number;
    remarks:                string;
    gpAssignmentID:         number;
    gpPatientClassID:       number;
    gpRelationshipStatusID: number;
    gpPhysicianID:          number;
    inActive:               boolean;
    gpSleepLabID:           number;
    company:                Company;
    branch:                 Branch;
    patientMode:            PatientMode;
    address:                Address[];
    contactDetail:          ContactDetail[];
    primaryContactNumber:   string;
    surveyName: string;
}

class Address {
    patientAddressID:               number;
    patientID:                      number;
    addressFull:                    string;
    addressLine1:                   string;
    addressLine2:                   string;
    addressLine3:                   string;
    city:                           string;
    stateID:                        number;
    stateName:                      string;
    countryID:                      number;
    countryName:                    string;
    zipCode:                        string;
    alternateAddressFull:           string;
    alternateAddressLine1:          string;
    alternateAddressLine2:          string;
    alternateAddressLine3:          string;
    alternateCity:                  string;
    alternateStateID:               number;
    alternateStateName:             string;
    alternateCountryID:             number;
    alternateCountryName:           string;
    alternateZipCode:               string;
    useAlternateAddressForShipping: boolean;
    updatedBy:                      number;
    updatedDate:                    Date;
    isDeleted:                      boolean;
    updateTerminal:                 string;
}

class Branch {
    branchID:   number;
    branchName: string;
    branchCode: string;
    npi:        string;
}

class Company {
    companyID:                             number;
    companyName:                           string;
    logo:                                  string;
    companyCode:                           string;
    gpCompanyClass:                        number;
    assistNumber:                          string;
    accountNumber:                         string;
    ediNumber:                             string;
    shipToNumber:                          string;
    contactNumber:                         string;
    otherContactNumber:                    string;
    faxNumber:                             string;
    emailAddress:                          string;
    webSite:                               string;
    addressFull:                           string;
    city:                                  string;
    addressLine1:                          string;
    addressLine2:                          string;
    addressLine3:                          string;
    gpCountryID:                           number;
    gpStateID:                             number;
    zipCode:                               string;
    inActive:                              boolean;
    perPatientCost:                        number;
    perIVRCallCost:                        number;
    perLiveCallCost:                       number;
    perEmailCallCost:                      number;
    perManualCallCost:                     number;
    perAutoShipCost:                       number;
    angelSiteNumber:                       string;
    comments:                              string;
    gpCompanyProgramID:                    number;
    enableLiveCallService:                 boolean;
    enableEmailService:                    boolean;
    enableIVRService:                      boolean;
    enableAutoShipService:                 boolean;
    enableMannualCallService:              boolean;
    isCMBCompany:                          boolean;
    unAttendedCallInterval:                number;
    gpTimeZoneID:                          number;
    ivrMaskNumber:                         string;
    addBy:                                 number;
    addOn:                                 Date;
    addTerminal:                           string;
    is_Deleted:                            boolean;
    isApproved:                            boolean;
    approvedBy:                            number;
    salesContactFirstName:                 string;
    salesContactLastName:                  string;
    salesContactMiddleInit:                string;
    salesPhone:                            string;
    salesFax:                              string;
    clinicalContactFirstName:              string;
    clinicalContactLastName:               string;
    clinicalContactMiddleInit:             string;
    clinicalPhone:                         string;
    clinicalFax:                           string;
    arContactFirstName:                    string;
    arContactLastName:                     string;
    arContactMiddleInit:                   string;
    arContactEmail:                        string;
    arContactPhone:                        string;
    arContactFax:                          string;
    itContactFirstName:                    string;
    itContactLastName:                     string;
    itContactMiddleInit:                   string;
    itPhone:                               string;
    itFax:                                 string;
    itEmail:                               string;
    operationsContactFirstName:            string;
    operationsContactLastName:             string;
    operationsContactMiddleInit:           string;
    operationsPhone:                       string;
    operationsFax:                         string;
    operationsEmail:                       string;
    supplyOrderContactFirstName:           string;
    supplyOrderContactLastName:            string;
    supplyOrderContactMiddleInit:          string;
    supplyOrderPhone:                      string;
    supplyOrderFax:                        string;
    supplyOrderEmail:                      string;
    specialPayors:                         string;
    excludedPayors:                        string;
    initiallySubmittiedPatient:            string;
    ongoingSubmittiedPatient:              string;
    currentOSSystem:                       string;
    dbType:                                string;
    applicationType:                       string;
    trasferMechanism:                      string;
    authorizedUser:                        string;
    followupSetting:                       string;
    followUpSettingDesc:                   string;
    manufacturersType:                     string;
    otherServices:                         string;
    otherSerivcesDesc:                     string;
    preferredPhoneAnnouncements:           string;
    downloads:                             string;
    downLoadFilePath:                      string;
    passwords:                             string;
    protocol:                              string;
    numberOfCompanyEmployees:              number;
    numberOfBranches:                      number;
    expectedTotalPatient:                  number;
    expectedMonthlyCompliance:             number;
    totalActiveMaintenance:                number;
    totalDivePatients:                     number;
    currentComplianceProcess:              string;
    averageShippingTimeFrame:              string;
    couriersUsed:                          string;
    thirdPartySupply:                      string;
    specialRequests:                       string;
    previousCompanyName:                   string;
    previousCompanyLocation:               string;
    followUpSettingID:                     number;
    followUpSettingType:                   string;
    isResupplyOnly:                        boolean;
    isSpecificProducts:                    boolean;
    enableIndependenceMedicalIntegration:  boolean;
    enablePPMIntegration:                  boolean;
    ppmOwnerCode:                          number;
    enableVGMIntegration:                  boolean;
    vgmTradingPartnerCode:                 string;
    enableFastrackIntegration:             boolean;
    targetFTPPath:                         string;
    inactivatePatientOnFirstCompletedCall: boolean;
    inactiveWeekendCall:                   boolean;
    updateBy:                              number;
    updateOn:                              Date;
    updateTerminal:                        string;
    enableSMSService:                      boolean;
    enableInsuranceVerification:           boolean;
    inboundNumber:                         string;
    storeURL:                              string;
}

class ContactDetail {
    patientContactDetailID: number;
    patientID:              number;
    timeZoneID:             number;
    timeZoneName:           string;
    contactNumber:          string;
    contactTypeID:          number;
    gpContactTypeID:        number;
    contactTypeName:        string;
    isPrimaryContact:       boolean;
    extension:              string;
    email:                  string;
    prefferedNumber:        string;
    callTimeFrom:           Date;
    callTimeTo:             Date;
    gpContactMethodID:      number;
    gpTimeZoneID:           number;
    addBy:                  number;
    addOn:                  Date;
    updateBy:               number;
    updateOn:               Date;
    addTerminal:            string;
    updateTerminal:         string;
    is_Deleted:             boolean;
    comments:               string;
}

class PatientMode {
    patientModeID:   number;
    patientModeName: string;
}