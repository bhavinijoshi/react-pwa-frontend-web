const en = {
  common: {
    viewOnMap: 'View On Map',
    viewLabel: 'View Label',
    viewDoc: 'View Document',
    ViewProcedure: 'View Procedure',
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    quickEdit: 'Quick Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    copy: 'Copied to clipboard',
    discardEdit: 'Discard edit',
    percent: 'Percent',
    add: 'ADD',
    hide: 'Hide',
    show: 'Show',
    delete: 'Delete',
    startDate: 'Start Date',
    endDate: 'End Date',
    invalidDate: 'Invalid Date',
    indoor: 'Indoor',
    outdoor: 'Outdoor',
    reload: 'Reload',
    tooltips: {
      employeeInfo: 'Employee Info',
      employee: 'Employee',
      copyData: 'Copy Data'
    },
    associatedDataConfirmModal: 'Do you want to delete all associated data with the User (s)',
    roleNotAllowed: 'You cannot edit/delete someone with higher role than you.',
    apiError: 'Something went wrong!',
    errors: {
      employeeFetchError: 'Failed to fetch employees, Try again later!',
      assetFetchError: 'Failed to fetch assets, Try again later!',
      subsiteFetchError: 'Failed to fetch subsites, Try again later!'
    },
    autoComplete: {
      employee: 'Employee',
      asset: 'Asset'
    },
    done: 'Done',
    saveAndProceed: 'Save & Proceed',
    replace: 'Replace',
    switchToIndoor: 'Switch to indoor',
    switchToOutdoor: 'Switch to outdoor',
    details: 'Details',
    print: 'Print',
    alerts: 'Alerts',
    general: 'General',
    approve: 'Approve',
    help: 'Help',
    locks: 'Locks',
    lockHistory: 'Lock History'
  },
  app: {
    title: 'Entelegis SafetyAssist - Cloud SaaS',
  },
  entities: {
    deviceProvisioning: {
      name: 'deviceProvisioning',
      label: 'Device Provisioning',
      menu: 'Device Provisioning',
      list: {
        menu: 'Device Provisioning',
        title: 'Device Provisioning',
      },
      create: {
        success: 'Device Provisioning saved successfully',
      },
      enumerators: {
        assigneeType: {
          Asset: 'Asset',
        },
        employeeType: {
          Contractor: 'Contractor',
          Visitor: 'Visitor',
        },
      },
    },
    reportsCanned: {
      name: 'reportsCanned',
      label: 'Canned Reports',
      menu: 'Canned Reports',
      selectAReportToRun: 'Select A Report To Run',
      selectOrgPlant: 'Select Org Plant',
      selectTicketStatus: 'Select Ticket Status',
      view: {
        title: 'Canned Reports',
        totalCloseContactByArea: 'Total Close Contacts By Area',
        totalCloseContactByEmployee: 'Total Close Contacts By Employee',
        totalGeoFenceStatusPerEmployeeByDay: 'Total Geofence Status For Employees By Day',
        employeeHealthStatus: 'Employee Health Status',
        employeesHealthScores: 'Employees Health Scores',
        arcFlashDueForRenewal: 'Arc Flash Due For Renewal',
        arcFlashReviewsExpiringIn90Days: 'Arc Flash Audit Reviews Expiring In Next 90 Days',
        lotoTickets: "LOTO - Tickets",
        lotoCurrentLocks: "LOTO - Current Locks",
        lotoRecentRemovedLocks: "LOTO – Recent Removed Locks"
      },
      columns: {
        numOfCloseContacts: '# Close Contacts',
        area: 'Area',
        lastContact: 'Last Contact',
        peopleView: 'People View',
        employeeNum: 'Employee #',
        date: 'Date',
        totalEmployees: 'Total Employees',
        totalOnSite: 'Total Onsite',
        totalOffSite: 'Total Offsite',
        totalUnknown: 'Total Unknown',
        plant: 'Plant',
        name: 'Name',
        healthStatus: 'Health Status',
        lastUpdatedAt: 'Last Updated At',
        healthScore: 'Health Score',
        renewDueDate: 'Review Due Date',
        ticketNum: 'Ticket #',
        ticketStatus: 'Ticket Status',
        scheduledStartDate: 'Schedule Start Date',
        scheduledEndDate: 'Schedule End Date',
        assetName: 'Asset',
        location: "Location"
      },
    },
    dashboard: {
      menu: 'Dashboard'
    },
    organizations: {
      name: 'organizations',
      label: 'Organizations',
      menu: 'Organizations',
      exporterFileName: 'organizations_export',
      list: {
        menu: 'Organizations',
        title: 'Organizations',
      },
      create: {
        success: 'Organizations saved successfully',
      },
      update: {
        success: 'Organizations saved successfully',
      },
      destroy: {
        success: 'Organizations deleted successfully',
        destroyAll: {
          success: 'Organizations(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Organizations',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        healthPolicyUrl: 'Health Policy URL',
        urlShortCode: 'URL Short Code',
        orgPrefix: 'Org Prefix',
        primaryContactName: 'Primary Contact Name',
        primaryContactEmail: 'Primary Contact Email',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Organizations',
      },
      view: {
        title: 'View Organizations',
      },
      importer: {
        title: 'Import Organizations',
        fileName: 'organizations_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    orgPlants: {
      name: 'orgPlants',
      label: 'Org Plants',
      menu: 'Org Plants',
      exporterFileName: 'orgPlants_export',
      list: {
        menu: 'Org Plants',
        title: 'Org Plants',
      },
      create: {
        success: 'Org Plants saved successfully',
      },
      update: {
        success: 'Org Plants saved successfully',
        error: 'Something went wrong!',
      },
      destroy: {
        success: 'Org Plants deleted successfully',
        destroyAll: {
          success: 'Org Plants(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Org Plants',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        primaryContactName: 'Primary Contact Name',
        primaryContactEmail: 'Primary Contact Email',
        orgId: 'Organization',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        maxOccupancy: 'Max Occupancy',
        urlShortCode: 'URL Short Code',
        enableBLEServices: 'Enable BLE Services',
        enableArcFlash: 'Enable Arc Flash',
        enablePandemic: 'Enable Pandemic',
        enableLOTO: 'Enable LOTO',
        gatewayPingIPAddress: 'Gateway Ping IPAddress',
        arcFlashStandardsOrg: 'Arc Flash Standards Organization',
        requireLOTOTicketToLock: 'LOTO locking requires Scheduled Ticket'
      },
      new: {
        title: 'New Org Plants',
      },
      view: {
        title: 'View Org Plants',
      },
      importer: {
        title: 'Import Org Plants',
        fileName: 'orgPlants_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    orgHierarchy: {
      name: 'orgHierarchy',
      label: 'Organization Hierarchy',
      menu: 'Organization Hierarchy',
      exporterFileName: 'orgHierarchy_export',
      searchMode: 'Search mode',
      orgHierarchyDelete: 'OrgHierarchy Delete',
      deleting: 'Deleting',
      primaryContactName: 'Primary Contact Name',
      primaryContactEmail: 'Primary Contact Email',
      urlShortCode: 'URL Short Code',
      orgHierarchy: 'OrgHierarchy',
      editing: 'Editing',
      adding: 'Adding',
      under: 'Under',
      deleteItem: 'Delete Item',
      editItem: 'Edit Item',
      addPlant: 'Add Site',
      configureGeoFence: 'Configure Geo Fence',
      addSection: 'Add Section',
      addArea: 'Add Area',
      addSubArea: 'Add SubArea',
      contains: 'Contains',
      Startswith: 'StartsWith',
      maxOccupancy: 'Max Occupancy',
      list: {
        menu: 'OrgHierarchy',
        title: 'Org Hierarchy',
      },
      create: {
        success: 'OrgHierarchy saved successfully',
      },
      update: {
        success: 'OrgHierarchy saved successfully',
      },
      destroy: {
        success: 'OrgHierarchy deleted successfully',
        destroyAll: {
          success: 'OrgHierarchy(s) deleted successfully',
        },
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        orgId: 'Organization',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Org Hierarchy',
      },
      view: {
        title: 'View Org Hierarchy',
      },
      importer: {
        title: 'Import Org Hierarchy',
        fileName: 'orgHierarchy_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    orgSections: {
      name: 'orgSections',
      label: 'OrgSections',
      menu: 'OrgSections',
      exporterFileName: 'orgSections_export',
      list: {
        menu: 'OrgSections',
        title: 'OrgSections',
      },
      create: {
        success: 'Organization Sections saved successfully',
      },
      update: {
        success: 'Organization Sections saved successfully',
      },
      destroy: {
        success: 'Organization Sections deleted successfully',
        destroyAll: {
          success: 'Organization Sections(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Organization Sections',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Organization Sections',
      },
      view: {
        title: 'View Organization Sections',
      },
      importer: {
        title: 'Import OrgSections',
        fileName: 'orgSections_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    orgAreas: {
      name: 'orgAreas',
      label: 'Areas',
      menu: 'Areas',
      exporterFileName: 'orgAreas_export',
      list: {
        menu: 'Areas',
        title: 'Areas',
      },
      create: {
        success: 'Area saved successfully',
      },
      update: {
        success: 'Area saved successfully',
      },
      destroy: {
        success: 'Area deleted successfully',
        destroyAll: {
          success: 'Area(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Area',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Area',
      },
      view: {
        title: 'View Area',
      },
      importer: {
        title: 'Import Areas',
        fileName: 'orgAreas_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    orgSubAreas: {
      name: 'orgSubAreas',
      label: 'Sub Areas',
      menu: 'Sub Areas',
      exporterFileName: 'orgSubAreas_export',
      list: {
        menu: 'Sub Areas',
        title: 'Sub Areas',
      },
      create: {
        success: 'Sub Area saved successfully',
      },
      update: {
        success: 'Sub Area saved successfully',
      },
      destroy: {
        success: 'Sub Area deleted successfully',
        destroyAll: {
          success: 'Sub Area(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Sub Area',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Sub Area',
      },
      view: {
        title: 'View Sub Area',
      },
      importer: {
        title: 'Import Sub Areas',
        fileName: 'orgSubAreas_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    peopleView: {
      name: 'People View',
      label: 'People View',
      menu: 'People View',
      contactOccurencesbyDay: 'Contact Occurences by Day',
      contactOccurences: 'Contact Occurences',
      healthMonitoring: 'Health Monitoring',
      ambitentTemperature: 'Ambitent Temperature',
      temperature: 'Temperature',
      heartRate: 'Heart Rate',
      ambitentTemperatureC: 'Ambitent Temperature °C',
      temperatureC: 'Temperature °C',
      heartRatebeatsPermin: 'Heart Rate beats/min',
      employeeStatistics: 'Please select an employee to see statistics',
      columns: {
        employeeNum: 'Employee#',
        name: 'Name',
        location: 'Location',
        timeContacted: 'Time Contacted',
        gpsLatitude: 'GPS Latitude',
        gpsLongitude: 'GPS Longitude',
        indoorXCoordinate: 'Indoor X coordinate',
        indoorYCoordinate: 'Indoor Y coordinate',
        geoSubsiteName: 'Geo-subsite Name',
        crossingDate: 'Crossing Date',
        status: 'Status',
        timeRecorded: 'Time recorded',
      },
      tooltip: {
        openCalendarView: 'Open Calendar View'
      },
      today: 'Today',
      assessments: 'Health Assessments',
      contactHistory: 'Contact History',
      movementHistory: 'Movement History',
      geofenceCrossings: 'Geofence Crossings',
      firstGenContacts: '1st Gen. Contacts',
      secondGenContacts: '2nd Gen. Contacts',
      thirdGenContacts: '3rd Gen. Contacts',
      travelHistory: 'Travel',
      testingHistory: 'Tests',
      vaccineHistory: 'Vaccine History',
      movements: 'Movements',
      details: 'Details',
      peopleHistoricalInformation: "People's Historical Information",
      searchEmployee: 'Search Employee',
      filter: 'Filter',
      moreInfo: 'More Info',
      infoBody: {
        testType: 'Test Type',
        method: 'Method',
        result: 'Result',
        count: 'Count',
        destination: 'Destination',
        travelType: 'Travel Type',
        vaccineType: 'Vaccine Type',
        express: 'Express Test',
        lab: 'Lab Test',
        swab: 'Swab',
        blood: 'Blood',
        urine: 'Urine',
        pending: 'Pending',
        positive: 'Positive',
        negative: 'Negative',
        international: 'International',
        local: 'Local',
      },
      warningMovementHistory: 'A maximum of 2500 records was loaded for movement history, please consider filtering using the date pickers.',
      warningHealthMonitoring: 'A maximum of 2500 records was loaded for health monitoring, please consider filtering using the date pickers.'
    },
    securityGate: {
      name: 'Security Gate',
      label: 'Security Gate',
      menu: 'Security Gate',
      employeeHealthHistoryLast14Days: 'Employee Health History Last 14 Days',
      temperature: 'Temperature',
      time: 'Time',
      temperatureC: 'Temperature °C',
      columns: {
        lastName: 'Lastname',
        firstName: 'Firstname',
        status: 'Status',
        startDate: 'Start Date',
        endDate: 'End Date',
        daysRemaining: 'Days Remaining',
        timeOnSite: 'Time Onsite',
        minutesElapsed: 'Minutes Elapsed',
        timeRecorded: 'Time recorded',
        ambitentTemperatureC: 'Ambitent Temperature °C',
        temperatureC: 'Temperature °C',
        heartRatebeatsPermin: 'Heart Rate beats/min',
      },
      messages: {
        saveSuccess: 'Saved Successfully',
        saveError: 'Something went wrong!',
        ok: 'OK',
        fail: 'Fail!',
      },
      employeeInfotab: {
        name: 'Name',
        employeeNum: 'Employee#',
        title: 'Title',
        currentAction: 'Current Action',
        status: 'Status',
        healthStatus: 'Health Status',
        building: 'Building',
        gpsLatitude: 'GPS Latitude',
        gpsLongitude: 'GPS Longitude',
        gpsBearing: 'GPS Bearing',
        gpsSpeed: 'GPS Speed',
        gpsAltitude: 'GPS Altitude',
        indoorXCoordinate: 'Indoor X Coordinate',
        indoorYCoordinate: 'Indoor Y Coordinate',
        lastReport: 'Last Report',
        viewCurrentLocation: 'View Current Location',
        currentLocation: 'Current Location',
        beacon: 'Beacon'
      },
      foundSomeError: 'found some error!',
      searchEmployee: 'Search Employee',
      filter: 'Filter',
      readBluetooth: 'Read Bluetooth',
      readQRCode: 'Read QR Code',
      takeTemperature: 'Take Temperature',
      quarantine: 'Quarantine',
      unquarantine: 'Unquarantine',
      pleaseselectAnEmployeeToSeeStatistics: 'Please select an employee to see statistics',
      needsTemperature: 'Needs Temperature',
      quarantineList: 'Quarantine List',
    },
    qrcodeReader: {
      healthPass: 'Health Pass',
      displayHealthPass: 'Please Display Your Health Pass QR Code',
      matchFound: 'Match Found',
      matchNotFound: 'Match Not Found',
    },
    nurseStation: {
      name: 'Nurse Station',
      label: 'Nurse Station',
      menu: 'Nurse Station',
      employeeHealthHistoryLast14Days: 'Employee Health History Last 14 Days',
      temperature: 'Temperature',
      time: 'Time',
      temperatureC: 'Temperature °C',
      filter: 'Filter',
      reason: 'Reason',
      quarantineLocations: {
        label: 'Select a Quarantine Location',
        site: 'Site',
        home: 'Home',
        hotel: 'Hotel'
      },
      columns: {
        timeRecorded: 'Time recorded',
        ambitentTemperatureC: 'Ambitent Temperature °C',
        temperatureC: 'Temperature °C',
        heartRatebeatsPermin: 'Heart Rate beats/min',
        lastName: 'Lastname',
        firstName: 'Firstname',
        status: 'Status',
        startDate: 'Start Date',
        endDate: 'End Date',
        daysRemaining: 'Days Remaining',
        timeOnSite: 'Time Onsite',
        minutesElapsed: 'Minutes Elapsed',
        assessmentDate: 'AssessmentDate',
        type: 'Type',
      },
      messages: {
        saveSuccess: 'Saved Successfully',
        saveError: 'Something went wrong!',
        ok: 'OK',
        fail: 'Fail!',
        gotHere: 'got here, debugging why subsequent calls to connectBLEDevice when clicked is not getting here.',
        connect: 'CONNECT',
        connecting: 'CONNECTING...',
        qrError: 'QR FORMAT INVALID!',
      },
      foundsomeerror: 'found some error',
      readBluetooth: 'Read Bluetooth',
      readQRCode: 'Read QR Code',
      takeTemperature: 'Take Temperature',
      beginHealthAssessment: 'Begin Health Assessment',
      quarantine: 'Quarantine',
      unquarantine: 'Unquarantine',
      pleaseSelectanEmployeeToSeeStatistics: 'Please select an employee to see statistics',
      assessments: 'Assessments',
      needsTemperature: 'Needs Temperature',
      quarantineList: 'Quarantine List',
      assesmentModal: {
        healthAssessment: 'Health Assessment',
        name: 'Name',
        symptoms: 'Symptoms',
        healthStatus: 'Health Status',
      },
      HealthAssesment: {
        Assesmentsave: 'Assesment Saved Successfully',
        somethingWentWrong: 'Something went wrong',
        healthAssessment: 'Health Assessment',
        healthAssessmentEmployee: 'Please Fill Out The Health Assessment For This Employee',
        pickOne: 'Pick One',
        selectHealthStatus: 'Please select health status',
        startDate: 'Start Date',
        endDate: 'End Date',
      },
      onsite: 'Onsite',
      offsite: 'Offsite'
    },
    managerView: {
      name: 'Manager View',
      label: 'Manager View',
      menu: 'Manager View',
      assessment: {
        fever: 'Fever',
        tiredness: 'Tiredness',
        dryCough: 'Dry Cough',
        achesAndPains: 'Aches And Pains',
        nasalCongestion: 'Nasal Congestion',
        runnyNose: 'Runny Nose',
        soreThroat: 'Sore Throat',
        diarrhea: 'Diarrhea',
        difficultyBreathing: 'Difficulty Breathing',
        travelledRecently: 'Travelled recently',
        past14DaysHistory: 'Have you travelled in the past 14 days',
        next14DaysHisto: 'Do you plan to travel in the next 14 days',
        exposedToPositivePerson: 'Exposed to positive person',
        testedPositiveForCovid19: 'Tested positive for Covid-19',
        testedNegativeForCovid19: 'Tested negative for Covid-19',
        vaccinatedForCovid19: 'Vaccinated for Covid-19',
      },
      columns: {
        employeeNum: 'Employee#',
        name: 'Name',
        location: 'Location',
        timeContacted: 'Time Contacted',
        gpsLatitude: 'GPS Latitude',
        gpsLongitude: 'GPS Longitude',
        indoorXCoordinate: 'Indoor X coordinate',
        indoorYCoordinate: 'Indoor Y coordinate',
        geoSubsiteName: 'Geo-subsite Name',
        crossingDate: 'Crossing Date',
        status: 'Status',
        timeRecorded: 'Time recorded',
        lastName: 'Lastname',
        firstName: 'Firstname',
        startDate: 'StartDate',
        endDate: 'EndDate',
        daysRemaining: 'Days Remaining',
        timeOnSite: 'Time Onsite',
        minutesElapsed: 'Minutes Elapsed',
        documentName: 'Document Name',
        hierarchy: 'Hierarchy',
        version: 'Version',
        lastUpdated: 'Last Updated',
        lastUpdatedBy: 'Last Updated By',
        type: 'Type',
        assessmentDate: 'Assessment Date',
      },
      chartComboHealthStatus: {
        weeklyEmployeeSymptomsVsCloseContacts: 'Weekly Employee Symptoms vs Close Contacts',
        week: 'Week',
        numOfDay: 'Number of Employees',
        reportedSymptomatic: 'Reported Symptomatic',
        closeContactOccurences: 'Close Contact Occurences',
      },
      stats: 'Stats',
      needsTemperature: 'Needs Temperature',
      assessmentFailures: 'Assessment Failures',
      quarantineList: 'Quarantine List',
      protocols: 'Protocols',
    },
    selfAssessment: {
      menu: 'Self Assessment',
      pageTitle: 'Self Assesment',
      title: 'Previous Assessments',
      healthStatus: "Health Status",
      cardTitle: "Latest Self Assesment",
      noRisk: {
        status: 'No Risk',
        consequences: 'Valid Entry',
        recommendations: 'Enter safely Keep social distancing Wash hands frequently Use sanitizer',
      },
      lowRisk: {
        status: 'Low Risk',
        consequences: 'No Entry for 1 day or until resolved',
        recommendations: 'GET PPE',
      },
      mediumRisk: {
        status: 'Medium Risk',
        consequences: 'No Entry for minimum 14 days from travel return date',
        recommendations: 'Self Isolate',
      },
      highRisk: {
        status: 'High Risk',
        consequences: 'No Entry for minimum 21 days or until resolved',
        recommendations: 'Call 911 Go to Hospital Self Isolate Call your doctor',
      },
      additionalInfo: "Additional Informartion",
      quarantineLocation: "Quarantine Location",
      quarantineLocationDescription: "Choose your prefered quarantine location",
      plantToTravel: 'Do you plan to travel in the next 14 days',
      haveYouTravelled: 'Have you travelled in the past 14 days',
      travelledRecently: 'Travelled recently',
      fever: 'Fever',
      tiredness: 'Tiredness',
      dryCough: 'Dry Cough',
      achesAndPains: 'Aches And Pains',
      nasalCongestion: 'Nasal Congestion',
      runnyNose: 'Runny Nose',
      soreThroat: 'Sore Throat',
      diarrhea: 'Diarrhea',
      difficultyBreathing: 'Difficulty Breathing',
      exposedToPositivePerson: 'Exposed to positive person',
      testedPositiveForCovid19: 'Tested positive for Covid-19',
      testedNegativeForCovid19: 'Tested negative for Covid-19',
      vaccinatedForCovid19: 'Vaccinated for Covid-19',
      pickOne: 'Pick One',
      healthy: 'Healthy',
      quarantined: 'Quarantined',
      symptomatic: 'Symptomic',
      death: 'Death',
      recovered: 'Recovered',
      nurse: 'Nurse',
      self: 'Self',
      all: 'All'
    },
    healthAssessments: {
      menu: 'Health Assessments',
      pageTitle: 'Health Assesments',
      title: 'Previous Assessments',
      selectEmployee: "Please select employee"
    },
    dashboardContactTracing: {
      name: 'Contact Tracing Dashboard',
      label: 'Contact Tracing Dashboard',
      menu: 'Contact Tracing Dashboard',
      charts: {
        day: 'Day',
        months: {
          1: 'January',
          2: 'February',
          3: 'March',
          4: 'April',
          5: 'May',
          6: 'June',
          7: 'July',
        },
        onsite: 'Onsite',
        offsite: 'Offsite',
        unknown: 'Unknown',
        totalNumOfContactsPerDay: 'Total # of Close Contacts per Day',
        numOfCloseContactsOccurancePerDay: '# Close Contact Occurences/Day',
        totalNumOfContactsPerWeek: 'Total # of Close Contacts per Week',
        numOfCloseContactsOccurancePerWeek: '# Close Contact Occurences/Week',
        areaWithHighestRateOfCloseContact: 'Areas with the highest rate of close contact',
        numberOfOccurances: 'Number of Occurences',
        siteArea: 'Site Area',
        employeeWithHighestRateOfCloseContact: 'Employees with the highest rate of close contact',
        totalEmployeeGeoFenceStatusLast7Days: 'Total Employee Geofence Status last 7 Days',
      },
      reportHeader: {
        employeeGeoFenceStatusMTD: 'Employee Geofence Status MTD',
        employeeGeoFenceStatusToday: 'Employee Geofence Status Today',
      },
    },
    dashboardEmployeeHealth: {
      name: 'Employee Health Dashboard',
      label: 'Employee Health Dashboard',
      menu: 'Employee Health Dashboard',
      charts: {
        day: 'Day',
        months: {
          1: 'January',
          2: 'February',
          3: 'March',
          4: 'April',
          5: 'May',
          6: 'June',
          7: 'July',
        },
        weeklyEmployeeSymptonsVsCloseContacts: 'Weekly Employee Symptoms vs Close Contacts',
        week: 'Week',
        numOfDay: 'Number of Employees',
        reportedSymptomatic: 'Reported Symptomatic',
        closeContactOccurences: 'Close Contact Occurences',
        topWorkAreaswithSymptomaticEmployees: 'Top Work Areas with Symptomatic Employees',
        numberOfEmployeesSymptomatic: 'Number of Employees Symptomatic',
        siteOrArea: 'Site/Area',
        employeeHealthStatistics: 'Employee Health Statistics',
        averageEmployeeTemperaturelast14Days: 'Average Employee Temperature',
        noIssues: 'No Issues',
        closeContact: 'Close Contact',
        symptomatic: 'Symptomatic',
        confirmed: 'Confirmed',
        recovered: 'Recovered',
        deaths: 'Deaths',
      },
    },
    dashboardHardwareHealth: {
      name: 'Hardware Dashboard',
      label: 'Hardware Dashboard',
      menu: 'Hardware Dashboard',
      mtd: 'Month to Date',
      daily: 'Daily',
      reportGateway: 'Gateway Report',
      reportBangle: 'Bangle Report',
      reportPuck: 'Puck Report',
      reportiPhone: 'iPhone Report',
      reportAndroid: 'Android Report',
      reportTotalDevices: 'Total Devices Report',
      charts: {
        active: 'Active',
        inActive: 'Inactive',
      }
    },
    dashboardArcFlash: {
      name: 'Arc Flash Dashboard',
      label: 'Arc Flash Dashboard',
      menu: 'Arc Flash Dashboard',
      reportGroupByPpe: 'Total Assets broken down by PPE Category',
      auditReviewsExpiry: 'Assets needing audit review in days',
      charts: {
        extremeDanger: 'Extreme Danger',
        ppe0: 'PPE 0',
        ppe1: 'PPE 1',
        ppe2: 'PPE 2',
        ppe3: 'PPE 3',
        ppe4: 'PPE 4',
        unknown: 'Unknown',
        count: 'Count',
        days: 'Days'
      }
    },
    dashboardLOTO: {
      name: 'LOTO Dashboard',
      label: 'LOTO Dashboard',
      menu: 'LOTO Dashboard',
      ticketByReason: 'Tickets By Reason',
      completedTickets: 'Completed Tickets',
      activeTickets: 'Active Tickets',
      ofScheduledTickets: 'Of Scheduled Tickets',
      totalActiveEquipmentLocks: 'Total # Of Active Equipment Locks',
      locksByAreaSubareaDevices: 'Locks By Site/Area/SubArea/Devices',
      unlocksByAreaSubAreaDevices: 'Unlocks By Site/Area/sSubArea/Devices',
      enumerators: {
        completedTickets: {
          wtd: "WTD",
          mtd: "MTD",
          ytd: "YTD"
        },
        scheduledTickets: {
          nextSevenDays: 'Next 7 Days',
          nextFourteenDays: 'Next 14 Days',
          nextThirtyDays: 'Next 30 days'
        }
      },
      ticketByReasonChart: {
        xLabel: 'Reason',
        yLabel: 'Number Of Tickets'
      },
      activeTicketsChart: {
        schedule: 'Schedule',
        inProgress: "In Progress"
      },
      equipmentsTicketsChart: {
        locks: 'Locks',
        unLocks: 'Unlocks'
      },
      tableColumns: {
        locks: {
          label: "# Of Locks",
          name: "locks"
        },
        area: {
          label: "Area",
          name: "area"
        },
        lastLockEvent: {
          label: "Last Lock Event",
          name: "lastLockEvent"
        }
      }
    },
    configGeofences: {
      name: 'Configure Geofences',
      label: 'Configure Geofences',
      menu: 'Configure Geofences',
    },
    mapOutdoorIndoor: {
      name: 'Mapping Outdoor/Indoor',
      label: 'Mapping Outdoor/Indoor',
      menu: 'Mapping Outdoor/Indoor',
      employeeOrAssetList: 'Employee/Asset List',
      filter: 'Filter',
      latitude: 'Latitude',
      longitude: 'Longitude',
      zoom: 'Zoom',
      bearing: 'Bearing',
      pitch: 'Pitch',
      people: 'People',
      bleGateways: 'BLE Gateways',
      bleBeacons: 'BLE Beacons',
      employeesProtected: 'Employees Protected',
      socialDistancingCompliance: 'Social distancing compliance',
      nonCompliant: 'Non-Compliant',
      teamMemberAtRisk: 'Team member at risk',
      immune: 'Immune',
      noContactsToDisplay: 'No Contacts To Display',
      customLabelName: 'Custom Label Name',
      atRisk: 'At Risk',
      arcflashes: 'Arc Flashes'
    },
    assetMapping: {
      menu: 'Asset Mapping',
      assets: 'Assets',
      dragAndDrop: 'Drag & drop',
      assetOnMap: 'the asset on map to create a new asset on that location',
      bleBeacon: 'BLE Beacon',
      bleGateway: 'BLE Gateway',
      entireArea: 'Entire Area',
      arcflash: 'Arc Flash',
      assetOnMapEdit1: 'Search existing asset,',
      assetOnMapEdit2: 'unmapped asset on map to add a location to it',
      new: 'New',
      existing: 'Existing'
    },
    document: {
      name: 'document',
      label: 'Documents',
      menu: 'Documents',
      exporterFileName: 'document_export',
      list: {
        menu: 'Documents',
        title: 'Documents',
      },
      create: {
        success: 'Document saved successfully',
      },
      update: {
        success: 'Document saved successfully',
      },
      destroy: {
        success: 'Document deleted successfully',
        destroyAll: {
          success: 'Document(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Document',
      },
      fields: {
        id: 'Id',
        docType: 'Document Type',
        docCategory: 'Document Category',
        sourceId: 'Source',
        name: 'Name',
        url: 'Url',
        tagList: 'Tag List',
        version: 'Version',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSection: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        docType: {
          Pandemic: 'Pandemic',
          ArcFlash: 'ArcFlash',
          LOTO: 'LOTO',
          BleGateway: 'BleGateway'
        },
      },
      new: {
        title: 'New Document',
      },
      view: {
        title: 'View Document',
      },
      importer: {
        title: 'Import Documents',
        fileName: 'document_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    asset: {
      name: 'asset',
      label: 'Assets',
      menu: 'Assets',
      exporterFileName: 'asset_export',
      list: {
        menu: 'Assets',
        title: 'Assets',
      },
      create: {
        success: 'Asset saved successfully',
      },
      update: {
        success: 'Asset saved successfully',
      },
      destroy: {
        success: 'Asset deleted successfully',
        destroyAll: {
          success: 'Asset(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Asset',
      },
      fields: {
        id: 'Asset ID',
        name: 'Name',
        description: 'Description',
        assetCategory: 'Asset Category',
        assetType: 'Asset Type',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        productType: 'Product Type',
        warningLabelImageUrl: 'Warning Label Image',
        limitedApproachBoundaryRange: 'Limited Approach Boundary',
        limitedApproachBoundary: 'Limited Approach Boundary',
        restrictedApproachBoundaryRange: 'Restricted Approach Boundary',
        restrictedApproachBoundary: 'Restricted Approach Boundary',
        prohibitedApproachBoundaryRange: 'Prohibited Approach Boundary',
        prohibitedApproachBoundary: 'Prohibited Approach Boundary',
        predictedArcingCurrentRange: 'Predicted Arcing Current',
        predictedArcingCurrent: 'Predicted Arcing Current',
        arcDurationRange: 'Arc Duration',
        arcDuration: 'Arc Duration',
        incidentEnergyRange: 'Incident Energy',
        incidentEnergy: 'Incident Energy',
        ppeRequirementsFootHand: 'PPE Requirements Foot/Hand',
        ppeREquirementsEyeHead: 'PPE REquirements Eye/Head',
        ppeRequirementsBody: 'PPE Requirements Body',
        documents: 'Documents',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        Password: 'Password',
        LastHeartbeat: 'Last Heart Beat Date',
        ipaddress: 'Ip Address',
        state: 'State',
        hostname: 'Host Name',
        softwareVersion: 'Software Version',
        environmentVersion: 'Environment Version',
        osVersion: 'OS Version',
        Latitude: 'Latitude',
        Longitude: 'Longitude',
        X: 'X',
        Y: 'Y',
        location: 'Location',
        deviceType: 'Device Type',
        deviceTypeName: 'Device Type Name',
        softwareUpdateStatus: 'Software Update Status',
        CheckWifiIPAddress: 'Check Wifi IPAddress',
        energyDistHierarchyId: 'Energy Distribution Hierachy',
        upstreamIds: 'Upstream Assets',
        upstreamId: 'Upstream Asset',
        workingDistance: 'Working Distance',
        afBoundary: 'Arc Flash Boundary',
        shockHazard: 'Shock Hazard',
        ppeCategory: 'PPE Category',
        standardsOrg: 'Standards Org',
        analysisBy: 'Analysis By',
        analysisInitialDate: 'Analysis Initial Date',
        analysisLastUpdated: 'Analysis Last Updated',
        analysisReviewDueDate: 'Analysis Review Due Date',
        deviceTypeId: 'Device Type',
        ppeInfo: 'PPE Info',
        assetId: 'Asset',
        onlyUnmapped: 'Only Unmapped',
        selectedId: 'Select Hierarchy',
        selectedAssets: 'Select Asset(s)',
        selectedAsset: 'select Asset',
        color: 'Color',
        hasArcFlash: 'Has ArcFlash',
        hasLOTO: 'Has LOTO',
        isIsolationPoint: 'is Isolation Point',
        energySourceDesc: 'Energy Source Desc',
        energySourceLocation: 'Energy Source Location',
        lockoutMethod: 'Lockout Method',
        lockoutDevice: 'Lockout Device',
        lotoNote: 'LOTO Note',
        lockoutApplicationProcess: 'Lockout Application Process',
        lockoutRemovalProcess: 'Lockout Removal Process',
        locks: '#Locks',
        lockStatus: 'Lock Status',
        lotoHazardId: 'LOTO Lock Out Hazards'
      },
      updateAvailable: 'Update available',
      upToDate: 'Up to date',
      enumerators: {
        assetType: {
          ArcFlash: 'ArcFlash',
          Machine: 'Machine',
          PLC: 'PLC',
          BleGateway: 'BleGateway',
          BleBeacon: 'BleBeacon'
        },
      },
      new: {
        title: 'New Asset',
      },
      view: {
        title: 'View Asset',
        downloadSetings: 'Download Settings'
      },
      importer: {
        title: 'Import Assets',
        fileName: 'asset_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      deleteWarning: 'If this Asset is a Root Node of any Energy Hierarchy, Entire Energy Hierarchy will be deleted!',
      deleteWarningMany: 'If any Asset of the selected row(s) is a Root Node of any Energy Hierarchy, Entire Energy Hierarchy will be deleted!',
      energySources: 'Energy Sources',
      energyHierarchy: 'Energy Hierarchy',
      lotoProcedure: 'LOTO Procedure',
      arcFlashLabel: 'ArcFlash Label'
    },
    blegateway: {
      name: 'blegateway',
      label: 'BleGateways',
      menu: 'BleGateways',
      exporterFileName: 'blegateway_export',
      list: {
        menu: 'BleGateways',
        title: 'BleGateways',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        properties: 'Properties',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        Password: 'Password',
        LastHeartbeat: 'Last Heart Beat',
        ipaddress: 'Ip Address',
        state: 'State',
        hostname: 'Host Name',
        softwareVersion: 'Software Version',
        environmentVersion: 'Environment Version',
        osVersion: 'OS Version'
      },
    },
    cloudadmin: {
      menu: 'Cloud Admin',
      title: 'Backend Server Log'
    },
    wearablesUpdate: {
      menu: 'Wearables Update',
      connect: 'connect',
      diconnected: 'Diconnected',
      minorCode: 'Minor code',
      sendCmd: 'Send CMD',
      getsettings: 'getSettings',
      getversion: 'getVersion',
      getuuidminorcode: 'getUUIDMinorCode',
      timesync: 'timeSync',
      upload: 'upload',
      reboot: 'reboot',
      setsettings: 'setSettings',
      puck: 'Puck',
      uploadfile: 'Upload File',
      history: 'HISTORY',
    },
    envvariables: {
      menu: 'Env Variables',
    },
    downloads: {
      downloads: 'Downloads',
      label: 'Downloads',
      menu: 'Downloads',
      android: 'SafetyAssist Mobile - Android',
      iphone: 'SafetyAssist Mobile - IOS (iphone, ipad)',
      diawi: 'Or install from Diawi',
    },
    pandemicAssessment: {
      name: 'pandemicAssessment',
      label: 'Pandemic Assessments',
      menu: 'Pandemic Assessments',
      exporterFileName: 'pandemicAssessment_export',
      list: {
        menu: 'Pandemic Assessments',
        title: 'Pandemic Assessments',
      },
      create: {
        success: 'Pandemic Assessment saved successfully',
      },
      update: {
        success: 'Pandemic Assessment saved successfully',
      },
      destroy: {
        success: 'Pandemic Assessment deleted successfully',
        destroyAll: {
          success: 'Pandemic Assessment(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Pandemic Assessment',
      },
      fields: {
        id: 'Id',
        hasFlu: 'Flu',
        hasHeadache: 'Headache',
        status: 'Status',
        recommendedAction: 'Recommended Action',
        hasDryCough: 'Dry Cough',
        employeeId: 'Patient',
        assessedById: 'Assessed By',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        status: {
          Unknown: 'Unknown',
          Symptomatic: 'Symptomatic',
          Healthy: 'Healthy',
        },
        recommendedAction: {
          None: 'None',
          IsolationAtWork: 'IsolationAtWork',
          IsolationAtHome: 'IsolationAtHome',
          Hospitalization: 'Hospitalization',
          DoctorFollowup: 'DoctorFollowup',
        },
      },
      new: {
        title: 'New Pandemic Assessment',
      },
      view: {
        title: 'View Pandemic Assessment',
      },
      importer: {
        title: 'Import Pandemic Assessments',
        fileName: 'pandemicAssessment_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    pandemicTemperature: {
      name: 'pandemicTemperature',
      label: 'Pandemic Temperatures',
      menu: 'Pandemic Temperatures',
      exporterFileName: 'pandemicTemperature_export',
      list: {
        menu: 'Pandemic Temperatures',
        title: 'Pandemic Temperatures',
      },
      create: {
        success: 'Pandemic Temperature saved successfully',
      },
      update: {
        success: 'Pandemic Temperature saved successfully',
      },
      destroy: {
        success: 'Pandemic Temperature deleted successfully',
        destroyAll: {
          success: 'Pandemic Temperature(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Pandemic Temperature',
      },
      fields: {
        id: 'Id',
        takenById: 'Taken By',
        temperatureRange: 'Temperature',
        temperature: 'Temperature',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Pandemic Temperature',
      },
      view: {
        title: 'View Pandemic Temperature',
      },
      importer: {
        title: 'Import Pandemic Temperatures',
        fileName: 'pandemicTemperature_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    pandemicCountry: {
      name: 'pandemicCountry',
      label: 'Pandemic Countries',
      menu: 'Pandemic Countries',
      exporterFileName: 'pandemicCountry_export',
      list: {
        menu: 'Pandemic Countries',
        title: 'Pandemic Countries',
      },
      create: {
        success: 'Pandemic Country saved successfully',
      },
      update: {
        success: 'Pandemic Country saved successfully',
      },
      destroy: {
        success: 'Pandemic Country deleted successfully',
        destroyAll: {
          success: 'Pandemic Country(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Pandemic Country',
      },
      fields: {
        id: 'Id',
        country: 'Country',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Pandemic Country',
      },
      view: {
        title: 'View Pandemic Country',
      },
      importer: {
        title: 'Import Pandemic Countries',
        fileName: 'pandemicCountry_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      pandemicCountryStats: {
        name: 'pandemicCountryStats',
        label: 'Pandemic Country Stats',
        menu: 'Pandemic Country Stats',
        exporterFileName: 'pandemicCountryStats_export',
        list: {
          menu: 'Pandemic Country Stats',
          title: 'Pandemic Country Stats',
        },
        create: {
          success: 'Pandemic Country Stats saved successfully',
        },
        update: {
          success: 'Pandemic Country Stats saved successfully',
        },
        destroy: {
          success: 'Pandemic Country Stats deleted successfully',
          destroyAll: {
            success: 'Pandemic Country Stats(s) deleted successfully',
          },
        },
        edit: {
          title: 'Edit Pandemic Country Stats',
        },
        fields: {
          id: 'Id',
          country: 'Country',
          confirmedRange: 'Confirmed',
          confirmed: 'Confirmed',
          recoveredRange: 'Recovered',
          recovered: 'Recovered',
          criticalRange: 'Critical',
          critical: 'Critical',
          deathsRange: 'Deaths',
          deaths: 'Deaths',
          latitudeRange: 'Latitude',
          latitude: 'Latitude',
          longitudeRange: 'Longitude',
          longitude: 'Longitude',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        new: {
          title: 'New Pandemic Country Stats',
        },
        view: {
          title: 'View Pandemic Country Stats',
        },
        importer: {
          title: 'Import Pandemic Country Stats',
          fileName: 'pandemicCountryStats_import_template',
          hint: 'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
    },
    locations: {
      name: 'locations',
      label: 'Locations',
      menu: 'Locations',
      exporterFileName: 'locations_export',
      list: {
        menu: 'Locations',
        title: 'Locations',
      },
      create: {
        success: 'Locations saved successfully',
      },
      update: {
        success: 'Locations saved successfully',
      },
      destroy: {
        success: 'Locations deleted successfully',
        destroyAll: {
          success: 'Locations(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Locations',
      },
      fields: {
        id: 'Id',
        userId: 'User',
        deviceId: 'Device',
        latitudeRange: 'Latitude',
        latitude: 'Latitude',
        longitudeRange: 'Longitude',
        longitude: 'Longitude',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Locations',
      },
      view: {
        title: 'View Locations',
      },
      importer: {
        title: 'Import Locations',
        fileName: 'locations_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      downloads: {
        downloads: 'Downloads',
        label: 'Downloads',
        menu: 'Downloads',
      },
    },
    assets: {
      name: 'Assets',
      label: 'Assets',
      menu: 'Assets',
      exporterFileName: 'Assets_exportados',
      list: {
        menu: 'Assets',
        title: 'Assets',
      },
      create: {
        success: 'Assets salvo com sucesso',
      },
      update: {
        success: 'Assets salvo com sucesso',
      },
      destroy: {
        success: 'Assets deletado com sucesso',
        destroyAll: {
          success: 'Assets(s) deletado com sucesso',
        },
      },
      edit: {
        title: 'Editar Assets',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        name: 'Name',
        description: 'Description',
        refNum: 'RefNum',
        productType: 'Product Type',
        documents: 'Documents',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novo Assets',
      },
      view: {
        title: 'Visualizar Assets',
      },
      importer: {
        title: 'Importar Assets',
        fileName: 'Assets_template_importacao',
        hint: 'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
    energyLocks: {
      name: 'energyLocks',
      label: 'Energy Locks',
      menu: 'Energy Locks',
      exporterFileName: 'energyLocks_export',
      list: {
        menu: 'Energy Locks',
        title: 'Energy Locks',
      },
      tabs: {
        currentLocks: 'Current Locks',
        lockHistory: 'Lock History'
      },
      create: {
        success: 'Energy Lock saved successfully',
      },
      update: {
        success: 'Energy Lock saved successfully',
      },
      destroy: {
        success: 'Energy Lock deleted successfully',
        destroyAll: {
          success: 'Energy Lock(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Energy Lock',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        assetId: 'Asset Id',
        locks: '#Locks',
        energyDistHierarchyId: 'Energy Hierarchy',
        lastLockDate: 'Last Lock Date',
        employeeId: 'Employee',
        lockIdentifierNum: 'Lock Identifier#',
        lockStatus: 'Lock Status',
        date: 'Date',
        orgPlantId: 'Plant',
        orgId: 'Organization',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Energy Lock',
      },
      view: {
        title: 'View Energy Lock',
      },
      enumerators: {
        lockStatus: {
          locked: 'Locked',
          lockedAndTagged: 'Locked and Tagged',
          unlocked: 'Unlocked',
        },
      }
    },
    lotoTickets: {
      name: 'lOTOTickets',
      label: 'LOTO Tickets',
      menu: 'LOTO Tickets',
      exporterFileName: 'lOTOTickets_export',
      list: {
        menu: 'LOTO Tickets',
        title: 'LOTO Tickets',
      },
      create: {
        success: 'LOTO Tickets saved successfully',
      },
      update: {
        success: 'LOTO Tickets saved successfully',
      },
      destroy: {
        success: 'LOTO Tickets deleted successfully',
        destroyAll: {
          success: 'LOTO Tickets(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit LOTO Tickets',
      },
      approve: {
        success: 'LOTO Ticket approved successfully',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Created By',
        ticketNum: 'Ticket#',
        reasonId: 'Reason',
        scheduledStartDate: 'Scheduled Start Date',
        description: 'Description',
        scheduledEndDate: 'Scheduled End Date',
        assetsList: 'Assets',
        employeesList: 'Employees allowed to lock/unlock the assets',
        ticketStatus: 'Ticket Status',
        requiredPPE: 'Required PPE',
        requiredBarriers: 'Required Barriers',
        type: 'Type',
        address: 'Address',
        approvalList: 'Approval List',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      lockAlerts: 'Lock Alerts',
      unlockAlerts: 'Unlock Alerts',
      currentLocks: 'Current Locks',
      documents: 'Documents',
      lotoNotes: 'Loto Notes',
      asset: 'Asset Id',
      locks: '#Locks',
      assets: 'Asset',
      note: 'Note',
      documentName: 'Name',
      documentUrl: 'Document',
      enumerators: {
        ticketStatus: {
          All: 'All',
          Scheduled: 'Scheduled',
          InProgress: 'In Progress',
          Completed: 'Completed',
          Cancelled: 'Cancelled'
        },
        lotoAlertTypes: {
          SMS: 'SMS',
          EMAIL: 'EMAIL'
        }
      },
      new: {
        title: 'New LOTO Tickets',
      },
      view: {
        title: 'View LOTO Tickets',
      },
      importer: {
        title: 'Import LOTO Tickets',
        fileName: 'lOTOTickets_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      helpTable: {
        lockingDeviceTable: {
          header: {
            "column1": "Steps for locking a device",
            "column2": "State: Unlocked->Locked",
          },
          rows: {
            "row1": { "step": "Step 1", "description": "Login to Mobile App", "state": '' },
            "row2": { "step": "Step 2", "description": "Identify Area, Sub-Area, Sub-Sub-Area", "state": "" },
            "row3": { "step": "Step 3", "description": "Identify a device to be locked (Equipment, Line, System)", "state": "" },
            "row4": { "step": "Step 4", "description": "Put a physical Lock on the device", "state": "" },
            "row5": { "step": "Step 5", "description": "Create a digital TagOut", "state": "Optional - Take a photo of your lock and attach to your digital TagOut" }
          }
        },
        removingLockWithQRTable: {
          header: {
            "column1": "Steps for removing a lock using QR Code",
            "column2": "State: Locked->Unlocked ",
          },
          rows: {
            "row1": { "step": "Step 1", "description": "Load the selected QR code ", "state": '' },
            "row2": { "step": "Step 2", "description": "Remove your physical lock ", "state": "Optional - Take a photo of removed lock and attach to your digital TagOut " },
            "row3": { "step": "Step 3", "description": "Remove your digital lock", "state": "" },
            "row4": { "step": "Step 4", "description": "Last lock removed changes state", "state": "" },

          }
        },
        removingLockManuallyTable: {
          header: {
            "column1": "Steps for removing a lock manually ",
            "column2": "",
          },
          rows: {
            "row1": { "step": "Step 1", "description": "Login to Mobile App ", "state": '' },
            "row2": { "step": "Step 2", "description": "Identify Area, Sub-Area, Sub-Sub-Area", "state": "" },
            "row3": { "step": "Step 3", "description": "Identify the device you want to remove your lock ", "state": "" },
            "row4": { "step": "Step 4", "description": "Remove your physical lock ", "state": "Optional - Take a photo of removed lock and attach to your digital TagOut " },
            "row5": { "step": "Step 5", "description": "Remove your digital lock ", "state": "" },
          }
        },
      }
    },
    arcFlashAssets: {
      name: 'arcFlashAssets',
      label: 'ArcFlash Asset',
      menu: 'ArcFlash Asset',
      exporterFileName: 'arcFlashAssets_export',
      list: {
        menu: 'ArcFlash Asset',
        title: 'ArcFlash Asset',
      },
      create: {
        success: 'ArcFlash Asset saved successfully',
      },
      update: {
        success: 'ArcFlash Asset saved successfully',
      },
      destroy: {
        success: 'ArcFlash Asset deleted successfully',
        destroyAll: {
          success: 'ArcFlash Asset(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit ArcFlash Asset',
      },
      fields: {
        id: 'Data ID',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Areas',
        name: 'Device ID',
        description: 'Description',
        deviceId: 'Device ID',
        deviceTypeId: 'Device Type',
        afBoundary: 'Arc Flash Boundary',
        shockHazard: 'Shock Hazard',
        ppeCategory: 'PPE Category',
        standardsOrg: 'Standards Organization',
        upstreamIds: 'Upstream Assets',
        incidentEnergy: 'Incident Energy',
        productType: 'Product Type',
        warningLabelImageUrl: 'Warning Label Image',
        limitedApproachBoundaryRange: 'Limited Approach Boundary',
        limitedApproachBoundary: 'Limited Approach Boundary',
        restrictedApproachBoundaryRange: 'Restricted Approach Boundary',
        restrictedApproachBoundary: 'Restricted Approach Boundary',
        prohibitedApproachBoundaryRange: 'Prohibited Approach Boundary',
        prohibitedApproachBoundary: 'Prohibited Approach Boundary',
        predictedArcingCurrentRange: 'Predicted Arcing Current',
        predictedArcingCurrent: 'Predicted Arcing Current',
        arcDurationRange: 'Arc Duration',
        arcDuration: 'Arc Duration',
        incidentEnergyRange: 'Incident Energy',
        ppeRequirementsFootHand: 'PPE Requirements Foot/Hand',
        ppeREquirementsEyeHead: 'PPE REquirements Eye/Head',
        ppeRequirementsBody: 'PPE Requirements Body',
        documents: 'Documents',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        arcFaultBusName: 'Arc Fault Bus Name',
        arcFaultBuskV: 'Arc Fault Bus kV',
        upstreamTripDeviceName: 'Upstream Trip Device Name',
        busBoltedFault: 'Bus Bolted Fault (kA)',
        busArcFault: 'Bus Arc Fault (kA)',
        estArcFlashBoundary: 'Est Arc Flash Boundary (inches)',
        workingDistance: 'Working Distance (inches)',
        incidentEnergyCal: 'Incident Energy (cal/cm2)',
        pPEComments: 'PPE / Comments',
        equipmentLabelComment: 'Equipment Label Comment',
        arcFlashFieldNames: 'ArcFlash Field Names',
        analysisNextReviewDate: 'Analysis Next Review Date',
        analysisBy: 'Analysis By',
        analysisInitials: 'Analysis Initials',
        energyHierarchy: 'Energy Hierarchy',
        assetType: 'Asset Type',
        energySourceLocation: 'Energy source location',
        lockoutMethod: 'Lockout Method',
        lockoutDevice: 'Lockout Device',
        isIsolation: 'IsIsolation'
      },
      new: {
        title: 'New ArcFlash Asset',
      },
      view: {
        title: 'View ArcFlash Asset',
      },
      importer: {
        title: 'Import ArcFlash Asset',
        fileName: 'arcFlashAssets_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
      validationMsg: {
        equipmentLabelComments_Empty: "Equipment label comment must have only one empty fields",
        arcFaultBusName: "duplicated in arc fault bus name",
        equipmentLabelComments_Not_Exist: "is not exist in arc fault bus name",
        equipmentLabelComments_Same: "arc fault bus name and equipment label comment should not be same in single row"
      }
    },
    arcFlashStandards: {
      name: 'arcFlashStandards',
      label: 'ArcFlash Standard',
      menu: 'ArcFlash Standard',
      exporterFileName: 'arcFlashStandards_export',
      list: {
        menu: 'ArcFlash Standard',
        title: 'ArcFlash Standard',
      },
      create: {
        success: 'ArcFlash Standard saved successfully',
      },
      update: {
        success: 'ArcFlash Standard saved successfully',
      },
      destroy: {
        success: 'ArcFlash Standard deleted successfully',
        destroyAll: {
          success: 'ArcFlash Standard(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit ArcFlash Standard',
      },
      fields: {
        id: 'Id',
        standardsOrg: 'Standards Org',
        standardsOrgText: 'Input Standards Org',
        ppeCategory: 'PPE Category',
        definition: 'Definition',
        color: 'Color',
        maxCalPerCm: 'maxCalPerCm',
        ppeHandFootText: 'PPE Hand Foot Text',
        ppeHandFootImageUrl: 'PPE Hand Foot Image',
        ppeEyeHeadText: 'PPE Eye Head Text',
        ppeEyeHeadImageUrl: 'PPE Eye Head Image',
        ppeBodyText: 'PPE Body Text',
        ppeBodyImageUrl: 'PPE Body Image',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New ArcFlash Standard',
      },
      view: {
        title: 'View ArcFlash Standard',
      },
      extremeDanger: 'Extreme Danger'
    },
    arcFlashPrintQrCodes: {
      name: 'arcFlashPrintQrCodes',
      label: 'Arc Flash QR Codes',
      menu: 'Print QR Codes',
      list: {
        menu: 'Arc Flash QR Codes',
        title: 'Arc Flash QR Codes',
      },
      create: {
        success: 'Arc Flash QR Codes saved successfully',
      },
      update: {
        success: 'Arc Flash QR Codes saved successfully',
      },
      destroy: {
        success: 'Arc Flash QR Codes deleted successfully',
        destroyAll: {
          success: 'Arc Flash QR Codes(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Arc Flash QR Codes',
      },
      preview: {
        title: 'Arc Flash QR Codes Preview',
        pdf: 'PDF',
        noPreview: 'No QR codes to Preview',
        message: 'Nothing to print!'
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        energyDistHierarchyId: 'Energy Distribution Hierarchy',
        name: 'Name',
        assetIds: 'Assets',
        selectAll: 'Select All',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Arc Flash QR Codes',
      },
      view: {
        title: 'View Arc Flash QR Codes',
      }
    },
    documentCategories: {
      name: 'documentCategories',
      label: 'Document Categories',
      menu: 'Document Categories',
      exporterFileName: 'documentCategories_export',
      list: {
        menu: 'Document Categories',
        title: 'Document Categories',
      },
      create: {
        success: 'Document Category saved successfully',
      },
      update: {
        success: 'Document Category saved successfully',
      },
      destroy: {
        success: 'Document Category deleted successfully',
        destroyAll: {
          success: 'Document Category(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Document Category',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Document Category',
      },
      view: {
        title: 'View Document Category',
      },
    },
    lotoReasons: {
      name: 'lotoTicketReasons',
      label: 'LOTO Ticket Reasons',
      menu: 'LOTO Ticket Reasons',
      exporterFileName: 'lotoTicketReasons_export',
      list: {
        menu: 'LOTO Ticket Reasons',
        title: 'LOTO Ticket Reasons',
      },
      create: {
        success: 'LOTO Ticket Reason saved successfully',
      },
      update: {
        success: 'LOTO Ticket Reason saved successfully',
      },
      destroy: {
        success: 'LOTO Ticket Reason deleted successfully',
        destroyAll: {
          success: 'LOTO Ticket Reason(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit LOTO Ticket Reason',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New LOTO Ticket Reason',
      },
      view: {
        title: 'View LOTO Ticket Reason',
      },
    },
    lotoAssets: {
      name: 'lotoAssets',
      label: 'LOTO Assets',
      menu: 'LOTO Assets',
      list: {
        menu: 'LOTO Assets',
        title: 'LOTO Assets',
      },
      details: 'Details',
      tableColumns: {
        energySource: {
          name: 'energySource',
          label: 'Energy Source'
        },
        energyHierarchy: {
          name: 'energyHierarchy',
          label: 'Energy Hierarchy'
        },
        lockMethod: {
          name: 'lockMethod',
          label: 'Lock Method'
        },
        lockDevice: {
          name: 'lockDevice',
          label: 'Lock Device'
        },
        lockStatus: {
          name: 'overallLockStatus',
          label: 'Lock Status'
        }
      }
    },
    lotoBarriers: {
      name: 'lotoBarriers',
      label: 'LOTO Barriers',
      menu: 'LOTO Barriers',
      exporterFileName: 'lotoBarriers_export',
      list: {
        menu: 'LOTO Barriers',
        title: 'LOTO Barriers',
      },
      create: {
        success: 'LOTO Barrier saved successfully',
      },
      update: {
        success: 'LOTO Barrier saved successfully',
      },
      destroy: {
        success: 'LOTO Barrier deleted successfully',
        destroyAll: {
          success: 'LOTO Barrier(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit LOTO Barrier',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New LOTO Barrier',
      },
      view: {
        title: 'View LOTO Barrier',
      },
    },
    ppeTypes: {
      name: 'ppeTypes',
      label: 'PPE',
      menu: 'PPE',
      exporterFileName: 'ppeTypes_export',
      list: {
        menu: 'PPE',
        title: 'PPE',
      },
      create: {
        success: 'PPE Type saved successfully',
      },
      update: {
        success: 'PPE Type saved successfully',
      },
      destroy: {
        success: 'PPE Type deleted successfully',
        destroyAll: {
          success: 'PPE Type(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit PPE Type',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New PPE Type',
      },
      view: {
        title: 'View PPE Type',
      },
    },
    lotoLockOutHazards: {
      name: 'lotoLockOutHazards',
      label: 'LOTO Lock Out Hazards',
      menu: 'LOTO Lock Out Hazards',
      exporterFileName: 'lotoLockOutHazards_export',
      list: {
        menu: 'LOTO Lock Out Hazards',
        title: 'LOTO Lock Out Hazards',
      },
      create: {
        success: 'LOTO Lock Out Hazard saved successfully',
      },
      update: {
        success: 'LOTO Lock Out Hazard saved successfully',
      },
      destroy: {
        success: 'LOTO Lock Out Hazard deleted successfully',
        destroyAll: {
          success: 'LOTO Lock Out Hazard(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit LOTO Lock Out Hazard',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New LOTO Lock Out Hazard',
      },
      view: {
        title: 'View LOTO Lock Out Hazard',
      },
    },
    lotoLockOutDevices: {
      name: 'lotoLockOutDevices',
      label: 'LOTO Lock Out Devices',
      menu: 'LOTO Lock Out Devices',
      exporterFileName: 'lotoLockOutDevices_export',
      list: {
        menu: 'LOTO Lock Out Devices',
        title: 'LOTO Lock Out Devices',
      },
      create: {
        success: 'LOTO Lock Out Device saved successfully',
      },
      update: {
        success: 'LOTO Lock Out Device saved successfully',
      },
      destroy: {
        success: 'LOTO Lock Out Device deleted successfully',
        destroyAll: {
          success: 'LOTO Lock Out Device(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit LOTO Lock Out Device',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New LOTO Lock Out Device',
      },
      view: {
        title: 'View LOTO Lock Out Device',
      },
    },
    lotoPrintProcedure: {
      name: 'lotoPrintProcedure',
      label: 'LOTO Print Procedure',
      menu: 'Print Procedure',
      view: {
        title: 'View LOTO Procedure',
      },
      fields: {
        id: 'Id',
        assetId: 'Asset',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      viewLabel: {
        header: 'Lockout/Tagout Procedure'
      }
    },
    lotoLockOutMethods: {
      name: 'lotoLockOutMethods',
      label: 'LOTO Lock Out Methods',
      menu: 'LOTO Lock Out Methods',
      exporterFileName: 'lotoLockOutMethods_export',
      list: {
        menu: 'LOTO Lock Out Methods',
        title: 'LOTO Lock Out Methods',
      },
      create: {
        success: 'LOTO Lock Out Method saved successfully',
      },
      update: {
        success: 'LOTO Lock Out Method saved successfully',
      },
      destroy: {
        success: 'LOTO Lock Out Method deleted successfully',
        destroyAll: {
          success: 'LOTO Lock Out Method(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit LOTO Lock Out Method',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New LOTO Lock Out Method',
      },
      view: {
        title: 'View LOTO Lock Out Method',
      },
    },
    assetCategories: {
      name: 'assetCategories',
      label: 'Asset Categories',
      menu: 'Asset Categories',
      exporterFileName: 'assetCategories_export',
      list: {
        menu: 'Asset Categories',
        title: 'Asset Categories',
      },
      create: {
        success: 'Asset Category saved successfully',
      },
      update: {
        success: 'Asset Category saved successfully',
      },
      destroy: {
        success: 'Asset Category deleted successfully',
        destroyAll: {
          success: 'Asset Category(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Asset Category',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Asset Category',
      },
      view: {
        title: 'View Asset Category',
      },
    },
    assetTypes: {
      name: 'assetTypes',
      label: 'Asset Types',
      menu: 'Asset Types',
      exporterFileName: 'assetTypes_export',
      list: {
        menu: 'Asset Types',
        title: 'Asset Types',
      },
      create: {
        success: 'Asset Type saved successfully',
      },
      update: {
        success: 'Asset Type saved successfully',
      },
      destroy: {
        success: 'Asset Type deleted successfully',
        destroyAll: {
          success: 'Asset Type(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Asset Type',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        assetCategory: 'Asset Category',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Asset Type',
      },
      view: {
        title: 'View Asset Type',
      },
    },
    energySourceLocations: {
      name: 'energySourceLocations',
      label: 'Energy Source Locations',
      menu: 'Energy Source Locations',
      exporterFileName: 'energySourceLocations_export',
      list: {
        menu: 'Energy Source Locations',
        title: 'Energy Source Locations',
      },
      create: {
        success: 'Energy Source Location saved successfully',
      },
      update: {
        success: 'Energy Source Location saved successfully',
      },
      destroy: {
        success: 'Energy Source Location deleted successfully',
        destroyAll: {
          success: 'Energy Source Location(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Energy Source Location',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Energy Source Location',
      },
      view: {
        title: 'View Energy Source Location',
      },
    },
    energySourceDescriptions: {
      name: 'energySourceDescriptions',
      label: 'Energy Source Descriptions',
      menu: 'Energy Source Descriptions',
      exporterFileName: 'energySourceDescriptions_export',
      list: {
        menu: 'Energy Source Descriptions',
        title: 'Energy Source Descriptions',
      },
      create: {
        success: 'Energy Source Description saved successfully',
      },
      update: {
        success: 'Energy Source Description saved successfully',
      },
      destroy: {
        success: 'Energy Source Description deleted successfully',
        destroyAll: {
          success: 'Energy Source Description(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Energy Source Description',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        energyType: 'Energy Source',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      new: {
        title: 'New Energy Source Description',
      },
      view: {
        title: 'View Energy Source Description',
      },
    },
    energyTypes: {
      name: 'energyTypes',
      label: 'Energy Sources',
      menu: 'Energy Sources',
      exporterFileName: 'energyTypes_export',
      list: {
        menu: 'Energy Sources',
        title: 'Energy Sources',
      },
      create: {
        success: 'Energy Source saved successfully',
      },
      update: {
        success: 'Energy Source saved successfully',
      },
      destroy: {
        success: 'Energy Source deleted successfully',
        destroyAll: {
          success: 'Energy Source(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Energy Source',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        code: 'Short Name',
        icon: 'Icon',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Energy Source',
      },
      view: {
        title: 'View Energy Source',
      },
    },
    energyHierarchy: {
      name: 'energyHierarchy',
      label: 'Energy Hierarchy',
      menu: 'Energy Hierarchies',
      exporterFileName: 'energyHierarchy_export',
      hierarchy: 'Hierarchy',
      list: {
        menu: 'Energy Hierarchies',
        title: 'Energy Hierarchies',
      },
      create: {
        success: 'Energy Hierarchy saved successfully',
      },
      update: {
        success: 'Energy Hierarchy saved successfully',
      },
      destroy: {
        success: 'Energy Hierarchy deleted successfully',
        destroyAll: {
          success: 'Energy Hierarchy(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Energy Hierarchy',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        name: 'Name',
        energyType: 'Energy Source',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        color: 'Color',
        showMoreOptions: 'Show More Options'
      },
      new: {
        title: 'New Energy Hierarchy',
      },
      view: {
        title: 'View Energy Hierarchy',
      },
      flowchart: {
        addChild: 'Add Child',
        replace: 'Replace Asset',
        lotoSettings: 'LOTO Settings'
      },
      removeConfirmationMessage: "On clicking Yes, selected asset's child asset(s) will be assigned to its parent asset."
    },
    arcFlashProductTypes: {
      name: 'arcFlashDeviceTypes',
      label: 'ArcFlash Device Types',
      menu: 'ArcFlash Device Types',
      exporterFileName: 'arcFlashDeviceTypes_export',
      list: {
        menu: 'ArcFlash Device Types',
        title: 'ArcFlash Device Types',
      },
      create: {
        success: 'ArcFlash Device Type saved successfully',
      },
      update: {
        success: 'ArcFlash Device Type saved successfully',
      },
      destroy: {
        success: 'ArcFlash Device Type deleted successfully',
        destroyAll: {
          success: 'ArcFlash Device Type(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit ArcFlash Device Type',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New ArcFlash Device Type',
      },
      view: {
        title: 'View ArcFlash Device Type',
      },
      importer: {
        title: 'Import ArcFlash Device Types',
        fileName: 'arcFlashDeviceTypes_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    notificationGroups: {
      name: 'notificationGroups',
      label: 'Notification Groups',
      menu: 'Notification Groups',
      exporterFileName: 'notificationGroups_export',
      list: {
        menu: 'Notification Groups',
        title: 'Notification Groups',
      },
      create: {
        success: 'Notification Group saved successfully',
      },
      update: {
        success: 'Notification Group saved successfully',
      },
      destroy: {
        success: 'Notification Group deleted successfully',
        destroyAll: {
          success: 'Notification Group(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Notification Group',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Notification Group',
      },
      view: {
        title: 'View Notification Group',
      },
      importer: {
        title: 'Import Notification Groups',
        fileName: 'notificationGroups_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    messagingGroups: {
      name: 'messagingGroups',
      label: 'Messaging Group',
      menu: 'Messaging Group',
      exporterFileName: 'messagingGroups_export',
      list: {
        menu: 'Messaging Group',
        title: 'Messaging Group',
      },
      create: {
        success: 'Messaging Group saved successfully',
      },
      update: {
        success: 'Messaging Group saved successfully',
      },
      destroy: {
        success: 'Messaging Group deleted successfully',
        destroyAll: {
          success: 'Messaging Group(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Messaging Group',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        name: 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        public: 'Public',
        persistent: 'Permanent',
      },
      new: {
        title: 'New Messaging Group',
      },
      view: {
        title: 'View Messaging Group',
      },
      importer: {
        title: 'Import Messaging Group',
        fileName: 'messagingGroups_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    messagingGroupMembers: {
      name: 'messagingGroupMembers',
      label: 'Messaging Group Members',
      menu: 'Messaging Group Members',
      exporterFileName: 'messagingGroupMembers_export',
      list: {
        menu: 'Messaging Group Members',
        title: 'Messaging Group Members',
      },
      create: {
        success: 'Messaging Group Member saved successfully',
      },
      update: {
        success: 'Messaging Group Member saved successfully',
      },
      destroy: {
        success: 'Messaging Group Member deleted successfully',
        destroyAll: {
          success: 'Messaging Group Member(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Messaging Group Member',
      },
      fields: {
        id: 'Id',
        groupId: 'Messaging Group Id',
        userId: 'User',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      new: {
        title: 'New Messaging Group Member',
      },
      view: {
        title: 'View Messaging Group Member',
      },
      importer: {
        title: 'Import Messaging Group Members',
        fileName: 'messagingGroupMembers_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    chat: {
      name: 'chat',
      label: 'Chat',
      menu: 'Chat',
      title: 'Chat',
      permanent: 'Permanent',
      public: 'Public',
      editname: 'Edit',
      exitGroup: 'Exit Group',
      exporterFileName: 'chat_export',
      list: {
        menu: 'Chat',
        title: 'Chat',
      },
      create: {
        success: 'Chat saved successfully',
      },
      update: {
        success: 'Chat saved successfully',
      },
      destroy: {
        success: 'Chat deleted successfully',
        destroyAll: {
          success: 'Chat(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Chat',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        orgSectionId: 'Section',
        orgAreaId: 'Area',
        orgSubAreaId: 'Sub Area',
        groupId: 'Group Id',
        groupName: 'Group Name',
        userId: 'User Id',
        message: 'Message',
        files: 'File',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        selectGroup: 'Please select group',
        typeAMessage: 'Type a message',
        searchForAChatGroup: 'Search for a chat group',
        newChatGroup: 'New Chat Group',
        enterNewChatGroupName: 'Please enter the name of the chat group.',
        chatGroupName: 'Chat Group Name:',
        persistent: 'Persistent',
        editChatGroup: 'Edit Chat Group',
        groupImage: 'Group Avatar',
        create: 'Create',
        confirm: 'Confirm',
        apply: 'Apply',
        sortBy: 'Sort by',
        startDate: 'Start Date',
        endDate: 'End Date',
        dateAscending: 'Date Ascending',
        dateDescending: 'Date Descending',
        searchText: 'Search Text',
        inviteMembers: 'Invite members',
        inviteorRemoveMembers: 'Invite or remove members',
        joinThisGroupToSendMessage: 'Join this group to send a message',
      },
      new: {
        title: 'New Chat',
      },
      view: {
        title: 'View Chat',
      },
      importer: {
        title: 'Import Chat',
        fileName: 'chat_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    employee: {
      name: 'employee',
      label: 'Employees',
      menu: 'Employees',
      exporterFileName: 'employee_export',
      list: {
        menu: 'Employees',
        title: 'Employees',
      },
      create: {
        success: 'Employee saved successfully',
      },
      update: {
        success: 'Employee saved successfully',
      },
      destroy: {
        success: 'Employee deleted successfully',
        destroyAll: {
          success: 'Employee(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Employee',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        firstName: 'First Name',
        lastName: 'Last Name',
        directManager: 'Direct Manager',
        assetType: 'Asset Type',
        employeeType: 'Employee Type',
        employeeNumber: 'Employee #',
        title: 'Title',
        mainWorkArea: 'Main Work Area',
        email: 'Email',
        state: 'State',
        action: 'Action',
        avatar: 'Avatar',
        lastContactRange: 'Last Contact',
        lastContact: 'Last Contact',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        password: "Password",
        createUser: "Auto Create User?",
        phoneNumber: 'Phone Number',
        countryCode: 'Country Code',
        roles: 'Roles',
        deviceType: 'Device Type',
        deviceTypeDesc: 'Device Type Desc'
      },
      enumerators: {
        assetType: {
          Person: 'Person',
        },
        employeeType: {
          Employee: 'Employee',
          Contractor: 'Contractor',
          Visitor: 'Visitor'
        }
      },
      new: {
        title: 'New Employee',
      },
      view: {
        title: 'View Employee',
      },
      importer: {
        title: 'Import Employees',
        fileName: 'employee_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    beacon: {
      name: 'beacon',
      label: 'Beacons',
      menu: 'Beacons',
      exporterFileName: 'beacon_export',
      list: {
        menu: 'Beacons',
        title: 'Beacons',
      },
      create: {
        success: 'Beacon saved successfully',
      },
      update: {
        success: 'Beacon saved successfully',
      },
      destroy: {
        success: 'Beacon deleted successfully',
        destroyAll: {
          success: 'Beacon(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Beacon',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Employee',
        assetId: 'Asset',
        uUIDMinorRange: 'UUIDMinor',
        uUIDMinor: 'UUIDMinor',
        deviceTypeRange: 'Device Type',
        deviceType: 'Device Type',
        deviceTypeName: 'Device Type Name',
        deviceTypeDesc: 'Device Type Desc',
        isProximityAlert: 'Is Proximity Alert',
        minProximityMRange: 'MinProximityM',
        minProximityM: 'MinProximityM',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        assigneeType: 'Assignee Type',
        employeeType: 'Employee Type',
        employeeNumber: 'Employee #',
        isRegistered: "Is Registered",
        isAssigned: "Is Assigned?",
        serialNum: "Serial #",
        trackingCode: "Tracking Code",
        purchaseDate: "Purchase Date",
        measuredPower: 'Measured Power',
        measuredPowerHint: 'Default value will be set if input is not given.',
        softwareUpdateStatus: 'Software Update Status',
        sourceMac: 'Source Mac',
        firmwareVersion: 'Firmware Version',
        softwareVersion: 'Software Version',
        settings: 'Settings'
      },
      updateAvailable: 'Update available',
      upToDate: 'Up to date',
      new: {
        title: 'New Beacon',
      },
      view: {
        title: 'View Beacon',
      },
      importer: {
        title: 'Import Beacons',
        fileName: 'beacon_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    beaconUnprovisioned: {
      name: 'beaconUnprovisioned',
      label: 'Beacons Unprovisioned',
      menu: 'Beacons Unprovisioned',
      exporterFileName: 'beaconUnprovisioned_export',
      list: {
        menu: 'Beacons Unprovisioned',
        title: 'Beacons Unprovisioned',
      },
      create: {
        success: 'Beacon Unprovisioned saved successfully',
      },
      update: {
        success: 'Beacon Unprovisioned saved successfully',
      },
      destroy: {
        success: 'Beacon Unprovisioned deleted successfully',
        destroyAll: {
          success: 'Beacon Unprovisioned(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Beacon Unprovisioned',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Employee',
        sourceMac: 'Source Mac',
        ipaddress: 'Ip Address',
        isBeaconNotAssigned: 'No Beacon Assigned',
        softwareVersion: 'Software Version',
        lastHeartbeat: 'Last Connected',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
      },
      updateAvailable: 'Update available',
      upToDate: 'Up to date',
      new: {
        title: 'New Beacon Unprovisioned',
      },
      view: {
        title: 'View Beacon Unprovisioned',
      },
      importer: {
        title: 'Import Beacons Unprovisioned',
        fileName: 'beaconUnprovisioned_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    firmware: {
      name: 'firmware',
      label: 'Firmware',
      menu: 'Firmware',
      exporterFileName: 'firmware_export',
      list: {
        menu: 'Firmware',
        title: 'Firmware',
      },
      create: {
        success: 'Firmware saved successfully',
      },
      update: {
        success: 'Firmware saved successfully',
      },
      destroy: {
        success: 'Firmware deleted successfully',
        destroyAll: {
          success: 'Firmware(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Firmware',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        deviceTypeRange: 'Device Type',
        deviceType: 'Device Type',
        deviceTypeName: 'Device Type Name',
        deviceTypeDesc: 'Device Type Desc',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        dateReleased: 'Date Released',
        firmwareVersion: 'Firmware Version',
        softwareVersion: 'Software Version',
        environmentVersion: 'Environment Version',
        firmwareZip: 'Firmware Filename Zip',
        softwareZip: 'Software Filename Zip',
        environmentScriptZip: 'Environment Script Zip',
        orgDetails: 'Org Details'
      },
      new: {
        title: 'New Firmware',
      },
      view: {
        title: 'View Firmware',
      },
      importer: {
        title: 'Import Firmware',
        fileName: 'firmware_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    masterEmailTemplate: {
      name: 'Master Email Template',
      label: 'Master Email Template',
      menu: 'Master Email Template',
      exporterFileName: 'masterEmailTemplate_export',
      list: {
        menu: 'Master Email Template',
        title: 'Master Email Template',
      },
      create: {
        success: 'Master Email Template saved successfully',
      },
      update: {
        success: 'Master Email Template saved successfully',
      },
      destroy: {
        success: 'Master Email Template deleted successfully',
        destroyAll: {
          success: 'Master Email Template(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Master Email Template',
      },
      new: {
        title: 'New Master Email Template',
      },
      view: {
        title: 'View Master Email Template',
      },
      enumerators: {
        templateType: {
          TemperatureTaken: 'Temperature Taken',
          FailedAssessment: 'Failed Assessment',
          CloseContact: 'Close Contact',
          HighConcentrationArea: 'High Concentration Area',
          LotoLock: 'LOTO Lock',
          LotoUnlock: 'LOTO Unlock',
          ArcFlashAuditDue: 'Arc Flash Audit Due'
        },
      },
    },
    emailTemplate: {
      name: 'Email Template',
      label: 'Email Template',
      menu: 'Email Template',
      exporterFileName: 'emailTemplate_export',
      list: {
        menu: 'Email Template',
        title: 'Email Template',
      },
      create: {
        success: 'Email Template saved successfully',
      },
      update: {
        success: 'Email Template saved successfully',
      },
      destroy: {
        success: 'Email Template deleted successfully',
        destroyAll: {
          success: 'Email Template(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Email Template',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        name: 'Name',
        subject: 'Subject',
        body: 'Body',
        isEnabled: 'Status',
        templateType: 'Template Type',
        subjectLang: 'Subject({0})',
        bodyLang: 'Body({0})',
      },
      new: {
        title: 'New Email Template',
      },
      view: {
        title: 'View Email Template',
      },
      disabled: 'Disabled',
      enabled: 'Enabled',
      doDisableAllSuccess: 'Template(s) disabled successfully',
      doEnableAllSuccess: 'Template(s) enabled successfully',
    },
    travelHistory: {
      name: 'Travel',
      label: 'Travel',
      menu: 'Travel',
      exporterFileName: 'travelHistory_export',
      list: {
        menu: 'Travel',
        title: 'Travel',
      },
      create: {
        success: 'Travel saved successfully',
      },
      update: {
        success: 'Travel saved successfully',
      },
      destroy: {
        success: 'Travel deleted successfully',
        destroyAll: {
          success: 'Travel(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Travel',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Employee',
        travelType: 'Travel Type',
        destination: 'Destination',
        startTime: 'Start Time',
        endTime: 'End Time',
        createdAtRange: 'Date',
        duration: 'Duration',
        purpose: 'Purpose'
      },
      enumerators: {
        travelType: {
          international: 'International',
          local: 'Local'
        }
      },
      new: {
        title: 'New Travel',
      },
      view: {
        title: 'View Travel',
      },
      importer: {
        title: 'Import Travel',
        fileName: 'travel_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    testingHistory: {
      name: 'Tests',
      label: 'Tests',
      menu: 'Tests',
      exporterFileName: 'testHistory_export',
      list: {
        menu: 'Tests',
        title: 'Tests',
      },
      create: {
        success: 'Test saved successfully',
      },
      update: {
        success: 'Test saved successfully',
      },
      destroy: {
        success: 'Test deleted successfully',
        destroyAll: {
          success: 'Test(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Test',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Employee',
        testType: 'Test Type',
        method: 'Method',
        reason: 'Reason',
        result: 'Result',
        testDate: 'Test Date and Time'
      },
      enumerators: {
        testType: {
          express: 'Express Test',
          lab: 'Lab Test'
        },
        method: {
          swab: 'Swab',
          blood: 'Blood',
          urine: 'Urine'
        },
        result: {
          pending: 'Pending',
          positive: 'Positive',
          negative: 'Negative'
        }
      },
      new: {
        title: 'New Test',
      },
      view: {
        title: 'View Test',
      },
      importer: {
        title: 'Import Test',
        fileName: 'test_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    vaccineHistory: {
      name: 'Vaccine',
      label: 'Vaccine',
      menu: 'Vaccine',
      exporterFileName: 'vaccineHistory_export',
      list: {
        menu: 'Vaccine',
        title: 'Vaccine',
      },
      create: {
        success: 'Vaccine saved successfully',
      },
      update: {
        success: 'Vaccine saved successfully',
      },
      destroy: {
        success: 'Vaccine deleted successfully',
        destroyAll: {
          success: 'Vaccine(s) deleted successfully',
        },
      },
      edit: {
        title: 'Edit Vaccine',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Employee',
        vaccineType: 'Vaccine Type',
        dateReceived: 'Date Received',
        immunityDuration: 'Expected Duration of immunity',
        expiryDate: 'Expiry Date',
      },
      enumerators: {
        VaccineType: {
          express: 'Express Vaccine',
          lab: 'Lab Vaccine'
        },
        method: {
          swab: 'Swab',
          blood: 'Blood',
          urine: 'Urine'
        },
        result: {
          pending: 'Pending',
          positive: 'Positive',
          negative: 'Negative'
        }
      },
      new: {
        title: 'New Vaccine',
      },
      view: {
        title: 'View Vaccine',
      },
      importer: {
        title: 'Import Vaccine',
        fileName: 'Vaccine_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    auth: {
      profile: {
        title: 'Edit Profile',
        success: 'Profile updated successfully',
        verifyCodeSuccess: 'Code verified successfully',
        resendCodeSuccess: 'Code re-sent successfully',
        verifyCodeError: 'Got some error while verifying code',
        resendCodeError: 'Got some error while re-sending code',
        tokenInvalid: 'Token is invalid',
        validationFailed: 'Validation Failed'
      },
      createAnAccount: 'Create an account',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password',
      signin: 'Sign in',
      signup: 'Sign up',
      signout: 'Sign out',
      verifyCode: 'Verify Code',
      resendCode: 'Resend Code',
      alreadyHaveAnAccount: 'Already have an account? Sign in.',
      signinWithAnotherAccount: 'Sign in with another account',
      emailUnverified: {
        message: 'Please confirm your email at <strong>{0}</strong> to continue.',
        submit: 'Resend email verification',
      },
      emptyPermissions: {
        message: 'You have no permissions yet. Wait for the admin to grant you privileges.',
      },
      passwordResetEmail: {
        message: 'Send password reset email',
        error: 'Email not recognized',
      },
      passwordReset: {
        message: 'Reset password',
      },
      emailAddressVerificationEmail: {
        error: 'Email not recognized',
      },
      verificationEmailSuccess: 'Verification email sent successfully',
      passwordResetEmailSuccess: 'Password reset email sent successfully',
      passwordResetSuccess: 'Password changed successfully',
      verifyEmail: {
        success: 'Email successfully verified',
        message: 'Just a moment, your email is being verified...',
      },
    },
    roles: {
      owner: {
        label: 'Owner',
        description: 'Full access to all resources',
      },
      orgAdmin: {
        label: 'Organization Admin',
        description: 'View only org level dashboards and reports, User management pages',
      },
      plantAdmin: {
        label: 'Plant Admin',
        description: 'View all pages with matching Plant of logged in user',
      },
      user: {
        label: 'User',
        description: 'No access to web, only access to Mobile phone app',
      },
      security: {
        label: 'Security',
        description: 'View Security Gate, People View, Device provisioning, Indoor/outdoor location and Dashboards pages',
      },
      nurse: {
        label: 'Nurse',
        description: 'View Nurse Station, People View and Dashboards pages',
      },
      manager: {
        label: 'Manager',
        description: 'View Manager view, People View, Indoor/outdoor location, Dashboards and Reports pages',
      },
      editor: {
        label: 'Editor',
        description: 'Edit access to all resources',
      },
      viewer: {
        label: 'Viewer',
        description: 'View access to all resources',
      },
      auditLogViewer: {
        label: 'Audit Log Viewer',
        description: 'Access to view audit logs',
      },
      iamSecurityReviewer: {
        label: 'Security Reviewer',
        description: 'Full access to manage users roles',
      },
      entityEditor: {
        label: 'Entity Editor',
        description: 'Edit access to all entities',
      },
      entityViewer: {
        label: 'Entity Viewer',
        description: 'View access to all entities',
      },
      organizationsEditor: {
        label: 'Organizations Editor',
        description: 'Edit access to Organizations',
      },
      organizationsViewer: {
        label: 'Organizations Viewer',
        description: 'View access to Organizations',
      },
      orgPlantsEditor: {
        label: 'Org Plants Editor',
        description: 'Edit access to Org Plants',
      },
      orgPlantsViewer: {
        label: 'Org Plants Viewer',
        description: 'View access to Org Plants',
      },
      orgSectionsEditor: {
        label: 'Organization Sections Editor',
        description: 'Edit access to OrgSections',
      },
      orgSectionsViewer: {
        label: 'Organization Sections Viewer',
        description: 'View access to OrgSections',
      },
      orgAreasEditor: {
        label: 'Area Editor',
        description: 'Edit access to Areas',
      },
      orgAreasViewer: {
        label: 'Area Viewer',
        description: 'View access to Areas',
      },
      orgSubAreasEditor: {
        label: 'Sub Area Editor',
        description: 'Edit access to Sub Areas',
      },
      orgSubAreasViewer: {
        label: 'Sub Area Viewer',
        description: 'View access to Sub Areas',
      },
      documentEditor: {
        label: 'Document Editor',
        description: 'Edit access to Documents',
      },
      documentViewer: {
        label: 'Document Viewer',
        description: 'View access to Documents',
      },
      assetEditor: {
        label: 'Asset Editor',
        description: 'Edit access to Assets',
      },
      assetViewer: {
        label: 'Asset Viewer',
        description: 'View access to Assets',
      },
      pandemicAssessmentEditor: {
        label: 'Pandemic Assessment Editor',
        description: 'Edit access to Pandemic Assessments',
      },
      pandemicAssessmentViewer: {
        label: 'Pandemic Assessment Viewer',
        description: 'View access to Pandemic Assessments',
      },
      pandemicTemperatureEditor: {
        label: 'Pandemic Temperature Editor',
        description: 'Edit access to Pandemic Temperatures',
      },
      pandemicTemperatureViewer: {
        label: 'Pandemic Temperature Viewer',
        description: 'View access to Pandemic Temperatures',
      },
      pandemicCountryEditor: {
        label: 'Pandemic Country Editor',
        description: 'Edit access to Pandemic Countries',
      },
      pandemicCountryViewer: {
        label: 'Pandemic Country Viewer',
        description: 'View access to Pandemic Countries',
      },
      pandemicCountryStatsEditor: {
        label: 'Pandemic Country Stats Editor',
        description: 'Edit access to Pandemic Country Stats',
      },
      pandemicCountryStatsViewer: {
        label: 'Pandemic Country Stats Viewer',
        description: 'View access to Pandemic Country Stats',
      },
      locationsEditor: {
        label: 'Locations Editor',
        description: 'Edit access to Locations',
      },
      locationsViewer: {
        label: 'Locations Viewer',
        description: 'View access to Locations',
      },
      arcFlashAssetsEditor: {
        label: 'ArcFlash Asset Editor',
        description: 'Edit access to ArcFlash Asset',
      },
      arcFlashAssetsViewer: {
        label: 'ArcFlash Asset Viewer',
        description: 'View access to ArcFlash Asset',
      },
      arcFlashProductTypesEditor: {
        label: 'ArcFlash Product Type Editor',
        description: 'Edit access to ArcFlash Product Types',
      },
      arcFlashProductTypesViewer: {
        label: 'ArcFlash Product Type Viewer',
        description: 'View access to ArcFlash Product Types',
      },
      notificationGroupsEditor: {
        label: 'Notification Group Editor',
        description: 'Edit access to Notification Groups',
      },
      notificationGroupsViewer: {
        label: 'Notification Group Viewer',
        description: 'View access to Notification Groups',
      },
      messagingGroupsEditor: {
        label: 'Messaging Group Editor',
        description: 'Edit access to Messaging Group',
      },
      messagingGroupsViewer: {
        label: 'Messaging Group Viewer',
        description: 'View access to Messaging Group',
      },
      messagingGroupMembersEditor: {
        label: 'Messaging Group Member Editor',
        description: 'Edit access to Messaging Group Members',
      },
      messagingGroupMembersViewer: {
        label: 'Messaging Group Member Viewer',
        description: 'View access to Messaging Group Members',
      },
      chatEditor: {
        label: 'Chat Editor',
        description: 'Edit access to Chat',
      },
      chatViewer: {
        label: 'Chat Viewer',
        description: 'View access to Chat',
      },
      beaconEditor: {
        label: 'Beacons Editor',
        description: 'Edit access to Beacons',
      },
      beaconViewer: {
        label: 'Beacons Viewer',
        description: 'View access to Beacons',
      },
      employeeEditor: {
        label: 'Employee Editor',
        description: 'Edit access to Employees',
      },
      employeeViewer: {
        label: 'Employee Viewer',
        description: 'View access to Employees',
      }
    },
    iam: {
      title: 'Identity and Access Management',
      menu: 'IAM',
      disable: 'Disable',
      disabled: 'Disabled',
      enabled: 'Enabled',
      enable: 'Enable',
      doEnableSuccess: 'User enabled successfully',
      doDisableSuccess: 'User disabled successfully',
      doDisableAllSuccess: 'User(s) disabled successfully',
      doEnableAllSuccess: 'User(s) enabled successfully',
      doAddSuccess: 'User(s) saved successfully',
      doUpdateSuccess: 'User saved successfully',
      viewBy: 'View By',
      users: {
        name: 'users',
        label: 'Users',
        exporterFileName: 'users_export',
        doRemoveAllSelectedSuccess: 'Permissions removed successfully',
      },
      roles: {
        label: 'Roles',
        doRemoveAllSelectedSuccess: 'Permissions removed successfully',
      },
      edit: {
        title: 'Edit User',
      },
      new: {
        title: 'New User(s)',
        titleModal: 'New User',
        emailsHint: 'Separate multiple email addresses using the comma character.',
      },
      view: {
        title: 'View User',
        activity: 'Activity',
      },
      importer: {
        title: 'Import Users',
        fileName: 'users_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
      },
      errors: {
        userAlreadyExists: 'User with this email already exists',
        userNotFound: 'User not found',
        disablingHimself: 'You can',
        revokingOwnPermission: 'You can',
      },
      destroy: {
        success: 'User deleted successfully',
        destroyAll: {
          success: 'User(s) deleted successfully',
        },
      },
    },
    alertSubscriptions: {
      name: 'alertSubscriptions',
      label: 'Alert Subscriptions',
      menu: "Alert Subscriptions",
      list: {
        menu: 'Alert Subscription',
        title: 'Alert Subscription',
      },
      fields: {
        id: 'Id',
        orgId: 'Organization',
        orgPlantId: 'Plant',
        employeeId: 'Employee',
        alertName: 'Alert Name',
        templateType: 'Template Type',
        isSubscribed: 'Subscribed',
        createdAt: 'Created at',
        updatedAt: 'Updated at',

      },
      subscribed: 'Subscribed',
      unSubscribed: 'UnSubscribed',
    },
    alertHistory: {
      name: 'alertHistory',
      label: 'Alert History',
      menu: "Alert History",
      list: {
        menu: 'Alert History',
        title: 'Alert History',
      },
      fields: {
        id: 'Id',
        _id: 'ID',
        subject: 'Subject',
        body: 'Body',
        employeeId: 'Employee',
        startDate: 'Start Date',
        endDate: 'End Date',
      },
    }
  },
  user: {
    fields: {
      id: 'Id',
      orgId: 'Organization',
      orgPlantId: 'Plant',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      employee: 'Employee(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      countryCode: 'Country Code',
      orgPlant: 'Plant',
      employeeNum: 'Employ Number',
      orgPrefix: 'Organiztion Code',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      twoFactorEnabled: 'Enable 2FA',
      verifyCode: 'Code',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      email: 'Email ${value} is invalid',
    },
  },
  geoSubSite: {
    fields: {
      locationName: 'Location Name',
      indoorMap: 'Floor image',
      hasIndoorMap: 'Has an indoor map',
      search: 'Search Address',
      latitude: 'Latitude',
      longitude: 'Longitude',
      floor: 'Floor#',
      maxOccupancy: 'Max Occupancy',
      parentSubsite: 'Parent Subite',
      zoom: 'Zoom',
      bearing: 'Bearing',
      pitch: 'Pitch',
      entireArea: 'Entire Area',
      subsite: 'subsite',
      geofence: 'geofence',
    },
    messages: {
      addSuccess: 'Subsite Added Successfully',
      editSuccess: 'Subsite Edited Successfully',
      addError: 'Something went wrong!',
      editError: 'Something went wrong while updating!',
      saveError: 'Draw Geofences before saving data!',
      saveErrorForSubsite: 'Draw Geofences for Plant first!',
      deleteSuccess: 'Subsite Deleted Successfully',
      deleteError: 'Something went wrong while deleting!',
      floorImageIsReq: 'Floor image is required',
      floorNumIsReq: 'Floor # is required',
      parentSubsiteIsReq: 'Parent Subsite is required',
      noGeoFenceFound: 'No Geofence found!',
      addNewSubsite: 'Add new subsite',
      actionMenu: 'Action Menu',
      editGeoFence: 'Edit geofence',
      editSubsite: 'Edit subsite',
      typeNameForThisLocation: 'Please type a name for this location. Once complete you will be put into edit mode so you can search for a location and pan, zoom and rotate until you have the view the way you like',
      editlocation: 'Here you can edit the details for the selected location',
      createNew: 'Create New',
      location: 'Location',
      searchlocation: 'Search Location',
      searchlocationmessage: 'You can search a location by using',
      name: 'Name',
      coordinates: 'Coordinates',
      loading: 'Loading',
    },
    geoFenceArea: 'GEO FENCE AREA',
    geoFenceCoordinates: 'Geo Fence Coordinates',
  },
  geoRooms: {
    addRoom: 'Add Room',
    editRoom: 'Edit Room',
    fields: {
      roomName: 'Room Name',
    },
    messages: {
      addSuccess: 'Room Added Successfully',
      editSuccess: 'Room Edited Successfully',
      saveSuccess: 'Saved Successfully',
      deleteSuccess: 'Deleeted SuccessFully',
      error: 'Something went wrong',
      deleteError: 'Something went wrong while deleting',
      saveError: 'Please draw a polygon before saving',
      notFound: 'No GeoRooms Found!',
    },
  },
  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    view: 'Audit Logs View',
    exporterFileName: 'audit_log_export',
    entityNamesHint: 'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  errorLog: {
    menu: 'Error Logs',
    title: 'Error Logs',
    view: 'Error Logs View',
    exporterFileName: 'error_log_export',
    entityNamesHint: 'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      orgId: 'Organization',
      orgPlantId: 'Plant',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      description: 'Description',
      method: 'Method',
      values: 'Values',
      timestamp: 'Date',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success: 'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      shade: 'Shade',
    },
  },
  arcFlash: {
    title: 'Arc Flash',
    menu: 'Arc Flash',
    subMenu: {
      assets: 'Assets',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      shade: 'Shade',
    },
    view: {
      title: 'ArcFlash View',
      label: 'Label',
      qrCode: 'QR Code',
      apiError: 'Got an error while loading warning image. Please reload your page.'
    },
  },
  home: {
    menu: 'Home',
    message: 'This page uses fake data for demonstration purposes only. You can edit it at frontend/view/home/HomePage.js.',
    realtimeMapping: 'Realtime Mapping',
    analytics: 'Analytics',
    managementReports: 'Management Reports',
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: 'Sorry, you do not have access to this page',
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf: '${path} must be one of the following values: ${values}',
      notOneOf: '${path} must not be one of the following values: ${values}',
    },
    string: {
      length: '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches: '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    object: {
      noUnknown: '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: 'Invalid format. Must be',
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: '{0} imported, {1} pending and {2} with error',
    importedMessage: 'Processed {0} of {1}.',
    noNavigateAwayMessage: 'Do not navigate away from this page or import will be stopped.',
    completed: {
      success: 'Import completed. All rows were successfully imported.',
      someErrors: 'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm: 'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel: 'Only excel (.xlsx) files are allowed',
      invalidFileUpload: 'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },
  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },
  imagesViewer: {
    noImage: 'No image',
  },
  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },
  body: {
    emptyDataSourceMessage: 'No records to display',
    editRow: {
      deleteText: 'Are you sure delete this row?',
    },
  },
  grouping: {
    placeholder: 'Drag headers ...',
    groupedBy: 'Grouped By:',
  },
  header: {
    actions: 'Actions',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelDisplayedRowsCustom: '{from}-{to} of {count}',
    labelRowsPerPage: 'Per page:',
    labelRowsSelect: 'Rows',
    firstAriaLabel: 'First Page',
    previousAriaLabel: 'Previous Page',
    nextAriaLabel: 'Next Page',
    lastAriaLabel: 'Last Page',
  },
  toolbar: {
    toolbar: 'Add or remove columns',
    nRowsSelected: '{0} row(s) selected',
    showColumnsTitle: 'Show Columns',
    exportTitle: 'Export',
    exportCSVName: 'Export as CSV',
    exportPDFName: 'Export as PDF',
    searchTooltip: 'Search',
  },
  insights: {
    menu: "Insights"
  },
  devices: {
    menu: "Devices"
  },
  dataEntry: {
    menu: "Data Entry"
  },
  loto: {
    menu: "LOTO",
    subMenu: {
      assets: 'Assets',
    }
  },
  mobileLoto: {
    menu: "LOTO",
    subMenu: {
      lotoTickets: 'LOTO Tickets',
      lotoAssets: 'LOTO Assets'
    }
  },
  lotoTicketsView: {
    name: 'lOTOTickets',
    label: 'LOTO Tickets',
    view: {
      title: 'LOTO Tickets',
    },
  },
  lotoAssetsView: {
    name: 'lOTOAssets',
    label: 'LOTO Assets',
    view: {
      title: 'LOTO Assets',
    },
  },
};

export default en;
