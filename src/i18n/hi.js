const hi = {
  common: {
    viewOnMap: 'View On Map??',
    viewLabel: 'View Label??',
    viewDoc: 'View Document??',
    ViewProcedure: 'View Procedure??',
    or: 'या',
    cancel: 'रद्द करना',
    reset: 'रीसेट',
    save: 'सहेजें',
    search: 'खोज',
    edit: 'संपादित करें',
    quickEdit: 'शीघ्र संपादित',
    remove: 'हटाना',
    new: 'नया',
    export: 'एक्सेल में भेजे',
    noDataToExport: 'निर्यात करने के लिए कोई डेटा नहीं',
    import: 'आयात',
    discard: 'रद्द करें',
    yes: 'हाँ',
    no: 'नहीं',
    pause: 'ठहराव',
    areYouSure: 'क्या आपको यकीन है?',
    view: 'राय',
    destroy: 'हटाएं',
    mustSelectARow: 'एक पंक्ति का चयन करना चाहिए',
    start: 'शुरू',
    end: 'समाप्त',
    copy: 'क्लिपबोर्ड पर नकल',
    discardEdit: 'संपादन छोड़ें',
    percent: 'प्रतिशत',
    add: 'जोड़ें',
    hide: 'छिपाना',
    show: 'प्रदर्शन',
    delete: 'हटाएं',
    startDate: 'आरंभ करने की तिथि',
    endDate: 'अंतिम तिथि',
    invalidDate: 'अमान्य तिथि',
    indoor: 'अंदर',
    outdoor: 'बाहर',
    reload: 'पुनः लोड करें',
    tooltips: {
      employeeInfo: 'कर्मचारी जानकारी',
      employee: 'कर्मचारी',
      copyData: 'डेटा कॉपी करें'
    },
    associatedDataConfirmModal: 'क्या आप उपयोगकर्ता (उपयोगकर्ता) के साथ जुड़े सभी डेटा को हटाना चाहते हैं',
    roleNotAllowed: 'आप अपने से उच्च भूमिका वाले किसी व्यक्ति को संपादित / हटा नहीं सकते।',
    apiError: 'कुछ गलत हो गया!',
    errors: {
      employeeFetchError: 'कर्मचारियों को लाने में विफल, बाद में पुनः प्रयास करें!',
      assetFetchError: 'संपत्ति लाने में विफल, बाद में पुनः प्रयास करें!',
      subsiteFetchError: 'उप साइटों को लाने में विफल, बाद में पुनः प्रयास करें!'
    },
    autoComplete: {
      employee: 'कर्मचारी',
      asset: 'एसेट',
    },
    done: 'हॊ गया',
    saveAndProceed: 'सहेजें और आगे बढ़ें',
    replace: 'बदले',
    switchToIndoor: 'Switch to indoor??',
    switchToOutdoor: 'Switch to outdoor??',
    details: 'Details??',
    print: 'Print??',
    alerts: 'Alerts??',
    general: 'General??',
    approve: 'Approve??',
    help: 'Help??',
    locks: 'Locks??',
    lockHistory: 'Lock History??'
  },
  app: {
    title: 'एनलेगिस सेफ्टीएसिस्ट - क्लाउड सास',
  },
  entities: {
    deviceProvisioning: {
      name: 'deviceProvisioning??',
      label: 'डिवाइस प्रोविजनिंग',
      menu: 'डिवाइस प्रोविजनिंग',
      list: {
        menu: 'डिवाइस प्रोविजनिंग',
        title: 'डिवाइस प्रोविजनिंग',
      },
      create: {
        success: 'उपकरण प्रावधान सफलतापूर्वक सहेजा गया',
      },
      enumerators: {
        assigneeType: {
          Asset: 'एसेट',
        },
        employeeType: {
          Contractor: 'ठेकेदार',
          Visitor: 'आगंतुक',
        },
      },
    },
    reportsCanned: {
      name: 'reportsCanned??',
      label: 'डिब्बाबंद रिपोर्ट',
      menu: 'डिब्बाबंद रिपोर्ट',
      selectAReportToRun: 'चलाने के लिए एक रिपोर्ट का चयन करें',
      selectOrgPlant: 'ऑर्गन प्लांट का चयन करें',
      selectTicketStatus: 'Select Ticket Status??',
      view: {
        title: 'डिब्बाबंद रिपोर्ट',
        totalCloseContactByArea: 'क्षेत्र द्वारा कुल बंद संपर्क',
        totalCloseContactByEmployee: 'कर्मचारी द्वारा कुल बंद संपर्क',
        totalGeoFenceStatusPerEmployeeByDay: 'कुल कर्मचारियों के लिए दिन तक की स्थिति',
        employeeHealthStatus: 'कर्मचारी स्वास्थ्य स्थिति',
        employeesHealthScores: 'कर्मचारी स्वास्थ्य स्कोर',
        arcFlashDueForRenewal: 'Arc Flash Due For Renewal??',
        arcFlashReviewsExpiringIn90Days: 'Arc Flash Audit Reviews Expiring In Next 90 Days??',
        lotoTickets: "LOTO - Tickets??",
        lotoCurrentLocks: "LOTO - Current Locks??",
        lotoRecentRemovedLocks: "LOTO – Recent Removed Locks??",
      },
      columns: {
        numOfCloseContacts: '# संपर्क बंद करें',
        area: 'क्षेत्र',
        lastContact: 'अंतिम संपर्क',
        peopleView: 'लोग देखें',
        employeeNum: 'कर्मचारी #',
        date: 'दिनांक',
        totalEmployees: 'कुल कर्मचारी',
        totalOnSite: 'कुल ऑनसाइट',
        totalOffSite: 'कुल ऑफसाइट',
        totalUnknown: 'कुल अज्ञात',
        plant: 'कारख़ाना',
        name: 'नाम',
        healthStatus: 'स्वास्थ्य की स्थिति',
        lastUpdatedAt: 'अंतिम अद्यतन पर',
        healthScore: 'स्वास्थ्य स्कोर',
        renewDueDate: 'Review Due Date??',
        ticketNum: 'Ticket #??',
        ticketStatus: 'Ticket Status??',
        scheduledStartDate: 'Schedule Start Date??',
        scheduledEndDate: 'Schedule End Date??',
        assetName: 'Asset??',
        location: "Location??"
      },
    },
    dashboard: {
      menu: 'डैशबोर्ड',
    },
    organizations: {
      name: 'संगठनों',
      label: 'संगठन',
      menu: 'संगठन',
      exporterFileName: 'organizations_export',
      list: {
        menu: 'संगठन',
        title: 'संगठन',
      },
      create: {
        success: 'संगठनों ने सफलतापूर्वक बचाया',
      },
      update: {
        success: 'संगठनों ने सफलतापूर्वक बचाया',
      },
      destroy: {
        success: 'संगठन सफलतापूर्वक हटा दिए गए',
        destroyAll: {
          success: 'संगठन सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'संगठनों को संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        healthPolicyUrl: 'स्वास्थ्य नीति URL',
        urlShortCode: 'URL छोटा कोड',
        orgPrefix: 'संगठन उपसर्ग',
        primaryContactName: 'प्राथमिक संपर्क नाम',
        primaryContactEmail: 'प्राथमिक संपर्क ईमेल',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नए संगठन',
      },
      view: {
        title: 'संगठन देखें',
      },
      importer: {
        title: 'आयात संगठन',
        fileName: 'organizations_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    orgPlants: {
      name: 'orgPlants??',
      label: 'Org Plants??',
      menu: 'Org Plants??',
      exporterFileName: 'orgPlants_export??',
      list: {
        menu: 'Org Plants??',
        title: 'Org Plants??',
      },
      create: {
        success: 'Org Plants सफलतापूर्वक बच गए',
      },
      update: {
        success: 'Org Plants सफलतापूर्वक बच गए',
        error: 'कुछ गलत हो गया!',
      },
      destroy: {
        success: 'Org Plants सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'Org Plants (s) सफलतापूर्वक हटा दिए गए',
        },
      },
      edit: {
        title: 'Org Plants संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        primaryContactName: 'प्राथमिक संपर्क नाम',
        primaryContactEmail: 'प्राथमिक संपर्क ईमेल',
        orgId: 'संगठन',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        maxOccupancy: 'अधिकतम अधिकार क्षेत्र',
        urlShortCode: 'URL छोटा कोड',
        enableBLEServices: 'BLE सेवाएँ सक्षम करें',
        enableArcFlash: 'आर्क फ्लैश सक्षम करें',
        enablePandemic: 'महामारी सक्षम करें',
        enableLOTO: 'LOTO सक्षम करें',
        gatewayPingIPAddress: 'गेटवे पिंग IPAddress',
        arcFlashStandardsOrg: 'आर्क फ्लैश मानक संगठन',
        requireLOTOTicketToLock: 'LOTO locking requires Scheduled Ticket??'
      },
      new: {
        title: 'न्यू ऑर्गप्लेंट्स',
      },
      view: {
        title: 'Org Plants देखें',
      },
      importer: {
        title: 'आयात Org Plants',
        fileName: 'orgPlants_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    orgHierarchy: {
      name: 'orgHierarchy',
      label: 'संगठन पदानुक्रम',
      menu: 'संगठन पदानुक्रम',
      exporterFileName: 'orgHierarchy_export',
      searchMode: 'खोज मोड',
      orgHierarchyDelete: 'OrgHierarchy हटाएं',
      deleting: 'हटाया जा रहा है',
      primaryContactName: 'प्राथमिक संपर्क नाम',
      primaryContactEmail: 'प्राथमिक संपर्क ईमेल',
      urlShortCode: 'URL छोटा कोड',
      orgHierarchy: 'OrgHierarchy',
      editing: 'संपादन',
      adding: 'जोड़ा जा रहा है',
      under: 'के अंतर्गत',
      deleteItem: 'चीज़ें हटाएं',
      editItem: 'संपादित आइटम',
      addPlant: 'साइट जोड़ें',
      configureGeoFence: 'जियो फेंस को कॉन्फ़िगर करें',
      addSection: 'अनुभाग जोड़ें',
      addArea: 'क्षेत्र जोड़ें',
      addSubArea: 'सबएरा जोड़ें',
      contains: 'शामिल',
      Startswith: 'इसके साथ आरंभ होता है',
      maxOccupancy: 'अधिकतम अधिकार क्षेत्र',
      list: {
        menu: 'OrgHierarchy',
        title: 'संगठन पदानुक्रम',
      },
      create: {
        success: 'OrgHierarchy सफलतापूर्वक बच गया',
      },
      update: {
        success: 'OrgHierarchy सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'OrgHierarchy को सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'OrgHierarchy (s) को सफलतापूर्वक हटा दिया गया',
        },
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        orgId: 'संगठन',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'न्यू ऑर्ग पदानुक्रम',
      },
      view: {
        title: 'ऑर्ग पदानुक्रम देखें',
      },
      importer: {
        title: 'ऑर्गन पदानुक्रम आयात करें',
        fileName: 'orgHierarchy_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
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
        success: 'संगठन अनुभाग सफलतापूर्वक सहेजे गए',
      },
      update: {
        success: 'संगठन अनुभाग सफलतापूर्वक सहेजे गए',
      },
      destroy: {
        success: 'संगठन अनुभाग सफलतापूर्वक हटा दिए गए',
        destroyAll: {
          success: 'संगठन अनुभागों को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'संगठन अनुभाग संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नया संगठन अनुभाग',
      },
      view: {
        title: 'संगठन अनुभाग देखें',
      },
      importer: {
        title: 'आयात आयात करें',
        fileName: 'orgSections_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    orgAreas: {
      name: 'orgAreas',
      label: 'क्षेत्रों',
      menu: 'क्षेत्रों',
      exporterFileName: 'orgAreas_export',
      list: {
        menu: 'क्षेत्रों',
        title: 'क्षेत्रों',
      },
      create: {
        success: 'क्षेत्र को सफलतापूर्वक बचाया',
      },
      update: {
        success: 'क्षेत्र को सफलतापूर्वक बचाया',
      },
      destroy: {
        success: 'क्षेत्र सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'क्षेत्र (ओं) को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'क्षेत्र संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नया क्षेत्र',
      },
      view: {
        title: 'क्षेत्र देखें',
      },
      importer: {
        title: 'आयात क्षेत्र',
        fileName: 'orgAreas_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    orgSubAreas: {
      name: 'orgSubAreas',
      label: 'उप क्षेत्र',
      menu: 'उप क्षेत्र',
      exporterFileName: 'orgSubAreas_export',
      list: {
        menu: 'उप क्षेत्र',
        title: 'उप क्षेत्र',
      },
      create: {
        success: 'सब एरिया सफलतापूर्वक बच गया',
      },
      update: {
        success: 'सब एरिया सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'सब एरिया सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'उप क्षेत्र (ओं) को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'सब एरिया संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'न्यू सब एरिया',
      },
      view: {
        title: 'उप क्षेत्र देखें',
      },
      importer: {
        title: 'सब एरिया आयात करें',
        fileName: 'orgSubAreas_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    peopleView: {
      name: 'लोग देखें',
      label: 'लोग देखें',
      menu: 'लोग देखें',
      contactOccurencesbyDay: 'संपर्क दिवस द्वारा',
      contactOccurences: 'संपर्क से संपर्क करें',
      healthMonitoring: 'स्वास्थ्य की निगरानी',
      ambitentTemperature: 'महत्वाकांक्षी तापमान',
      temperature: 'तापमान',
      heartRate: 'हृदय गति',
      ambitentTemperatureC: 'महत्वाकांक्षी तापमान °C',
      temperatureC: 'तापमान °C',
      heartRatebeatsPermin: 'दिल की धड़कन / मिनट',
      employeeStatistics: 'कृपया आँकड़े देखने के लिए किसी कर्मचारी का चयन करें',
      columns: {
        employeeNum: 'कर्मचारी#',
        name: 'नाम',
        location: 'स्थान',
        timeContacted: 'समय से संपर्क किया',
        gpsLatitude: 'जीपीएस अक्षांश',
        gpsLongitude: 'जीपीएस देशांतर',
        indoorXCoordinate: 'इनडोर एक्स समन्वय',
        indoorYCoordinate: 'इंडोर वाई समन्वय',
        geoSubsiteName: 'भू-सूक्ष्मा नाम',
        crossingDate: 'पार करने की तारीख',
        status: 'स्थिति',
        timeRecorded: 'समय दर्ज किया गया',
      },
      tooltip: {
        openCalendarView: 'कैलेंडर दृश्य खोलें',
      },
      today: 'आज',
      assessments: 'स्वास्थ्य आकलन',
      contactHistory: 'संपर्क इतिहास',
      movementHistory: 'गति का इतिहास',
      geofenceCrossings: 'जियोफेंस क्रॉसिंग',
      firstGenContacts: '1 जनरल संपर्क',
      secondGenContacts: 'दूसरा जनरल। संपर्क',
      thirdGenContacts: 'तीसरा जनरल। संपर्क',
      travelHistory: 'यात्रा',
      testingHistory: 'टेस्ट',
      vaccineHistory: 'वैक्सीन का इतिहास',
      movements: 'गति',
      details: 'विवरण',
      peopleHistoricalInformation: 'लोगों की ऐतिहासिक जानकारी',
      searchEmployee: 'कर्मचारी खोजें',
      filter: 'फ़िल्टर',
      moreInfo: 'और जानकारी',
      infoBody: {
        testType: 'टेस्ट का प्रकार',
        method: 'तरीका',
        result: 'परिणाम',
        count: 'गिनती',
        destination: 'गंतव्य',
        travelType: 'यात्रा का प्रकार',
        vaccineType: 'वैक्सीन के प्रकार',
        express: 'एक्सप्रेस टेस्ट',
        lab: 'लैब टेस्ट',
        swab: 'पट्टी',
        blood: 'रक्त',
        urine: 'मूत्र',
        pending: 'विचाराधीन',
        positive: 'सकारात्मक',
        negative: 'नकारात्मक',
        international: 'अंतरराष्ट्रीय',
        local: 'स्थानीय',
      },
      warningMovementHistory: 'A maximum of 2500 records was loaded for movement history, please consider filtering using the date pickers.??',
      warningHealthMonitoring: 'A maximum of 2500 records was loaded for health monitoring, please consider filtering using the date pickers.??'
    },
    securityGate: {
      name: 'सुरक्षा दरवाज़ा',
      label: 'सुरक्षा दरवाज़ा',
      menu: 'सुरक्षा दरवाज़ा',
      employeeHealthHistoryLast14Days: 'कर्मचारी स्वास्थ्य इतिहास पिछले 14 दिन',
      temperature: 'तापमान',
      time: 'समय',
      temperatureC: 'तापमान ° C',
      columns: {
        lastName: 'उपनाम',
        firstName: 'पहला नाम',
        status: 'स्थिति',
        startDate: 'आरंभ करने की तिथि',
        endDate: 'अंतिम तिथि',
        daysRemaining: 'बचे हुए दिन',
        timeOnSite: 'समय ऑनसाइट',
        minutesElapsed: 'मिनट बीत गए',
        timeRecorded: 'समय दर्ज किया गया',
        ambitentTemperatureC: 'महत्वाकांक्षी तापमान °C',
        temperatureC: 'तापमान °C',
        heartRatebeatsPermin: 'दिल की धड़कन / मिनट',
      },
      messages: {
        saveSuccess: 'सफलतापूर्वक बचाया',
        saveError: 'कुछ गलत हो गया!',
        ok: 'ठीक है',
        fail: 'असफल!',
      },
      employeeInfotab: {
        name: 'नाम',
        employeeNum: 'कर्मचारी#',
        title: 'शीर्षक',
        currentAction: 'वर्तमान क्रिया',
        status: 'स्थिति',
        healthStatus: 'स्वास्थ्य की स्थिति',
        building: 'इमारत',
        gpsLatitude: 'जीपीएस अक्षांश',
        gpsLongitude: 'जीपीएस देशांतर',
        gpsBearing: 'जीपीएस असर',
        gpsSpeed: 'जीपीएस स्पीड',
        gpsAltitude: 'जीपीएस ऊंचाई',
        indoorXCoordinate: 'इंडोर एक्स कोऑर्डिनेट',
        indoorYCoordinate: 'इंडोर वाई समन्वय',
        lastReport: 'अंतिम रिपोर्ट',
        viewCurrentLocation: 'वर्तमान स्थान देखें',
        currentLocation: 'वर्तमान स्थान',
        beacon: 'प्रकाश'
      },
      foundSomeError: 'कुछ त्रुटि मिली!',
      searchEmployee: 'कर्मचारी खोजें',
      filter: 'फ़िल्टर',
      readBluetooth: 'ब्लूटूथ पढ़ें',
      readQRCode: 'क्यूआर कोड पढ़ें',
      takeTemperature: 'तापमान लेना',
      quarantine: 'संगरोध',
      unquarantine: 'Unquarantine??',
      pleaseselectAnEmployeeToSeeStatistics: 'कृपया आँकड़े देखने के लिए किसी कर्मचारी का चयन करें',
      needsTemperature: 'तापमान की आवश्यकता है',
      quarantineList: 'संगरोध सूची',
    },
    qrcodeReader: {
      healthPass: 'स्वास्थ्य पास',
      displayHealthPass: 'कृपया अपना स्वास्थ्य पास क्यूआर कोड प्रदर्शित करें',
      matchFound: 'मेल मिल गया',
      matchNotFound: 'मैच नहीं मिला',
    },
    nurseStation: {
      name: 'नर्स स्टेशन',
      label: 'नर्स स्टेशन',
      menu: 'नर्स स्टेशन',
      employeeHealthHistoryLast14Days: 'कर्मचारी स्वास्थ्य इतिहास पिछले 14 दिन',
      temperature: 'तापमान',
      time: 'समय',
      temperatureC: 'तापमान ° C',
      filter: 'फ़िल्टर',
      reason: 'कारण',
      quarantineLocations: {
        label: 'एक संगरोध स्थान चुनें',
        site: 'साइट',
        home: 'घर',
        hotel: 'होटल',
      },
      columns: {
        timeRecorded: 'समय दर्ज किया गया',
        ambitentTemperatureC: 'महत्वाकांक्षी तापमान °C',
        temperatureC: 'तापमान °C',
        heartRatebeatsPermin: 'दिल की धड़कन / मिनट',
        lastName: 'उपनाम',
        firstName: 'पहला नाम',
        status: 'स्थिति',
        startDate: 'आरंभ करने की तिथि',
        endDate: 'अंतिम तिथि',
        daysRemaining: 'बचे हुए दिन',
        timeOnSite: 'समय ऑनसाइट',
        minutesElapsed: 'मिनट बीत गए',
        assessmentDate: 'मूल्यांकन तिथि',
        type: 'प्रकार',
      },
      messages: {
        saveSuccess: 'सफलतापूर्वक बचाया',
        saveError: 'कुछ गलत हो गया!',
        ok: 'ठीक है',
        fail: 'असफल!',
        gotHere: 'यहाँ क्लिक करें, डिबगिंग क्यों बाद में क्लिक करने के लिए कनेक्टब्लिडेविस से कॉल करता है, यहाँ नहीं मिल रहा है।',
        connect: 'जुडिये',
        connecting: 'कनेक्ट ...',
        qrError: 'QR FORMAT INVALID!??',
      },
      foundsomeerror: 'कुछ त्रुटि मिली',
      readBluetooth: 'ब्लूटूथ पढ़ें',
      readQRCode: 'क्यूआर कोड पढ़ें',
      takeTemperature: 'तापमान लेना',
      beginHealthAssessment: 'स्वास्थ्य आकलन शुरू करें',
      quarantine: 'संगरोध',
      unquarantine: 'Unquarantine',
      pleaseSelectanEmployeeToSeeStatistics: 'कृपया आँकड़े देखने के लिए किसी कर्मचारी का चयन करें',
      assessments: 'आकलन',
      needsTemperature: 'तापमान की आवश्यकता है',
      quarantineList: 'संगरोध सूची',
      assesmentModal: {
        healthAssessment: 'स्वास्थ्य की जांच करना',
        name: 'नाम',
        symptoms: 'लक्षण',
        healthStatus: 'स्वास्थ्य की स्थिति',
      },
      HealthAssesment: {
        Assesmentsave: 'असफ़ल सफलतापूर्वक बच गए',
        somethingWentWrong: 'कुछ गलत हो गया',
        healthAssessment: 'स्वास्थ्य की जांच करना',
        healthAssessmentEmployee: 'कृपया इस कर्मचारी के लिए स्वास्थ्य आकलन भरें',
        pickOne: 'एक चुनें',
        selectHealthStatus: 'कृपया स्वास्थ्य स्थिति का चयन करें',
        startDate: 'आरंभ करने की तिथि',
        endDate: 'अंतिम तिथि',
      },
      onsite: 'साइट पर',
      offsite: 'ऑफ साइट'
    },
    managerView: {
      name: 'प्रबंधक दृश्य',
      label: 'प्रबंधक दृश्य',
      menu: 'प्रबंधक दृश्य',
      assessment: {
        fever: 'बुखार',
        tiredness: 'थकान',
        dryCough: 'सूखी खांसी',
        achesAndPains: 'दर्द एवं पीड़ा',
        nasalCongestion: 'नाक बंद',
        runnyNose: 'बहती नाक',
        soreThroat: 'गले में खराश',
        diarrhea: 'दस्त',
        difficultyBreathing: 'सांस लेने मे तकलीफ',
        travelledRecently: 'हाल ही में यात्रा की',
        past14DaysHistory: 'क्या आपने पिछले 14 दिनों में यात्रा की है',
        next14DaysHisto: 'क्या आप अगले 14 दिनों में यात्रा करने की योजना बना रहे हैं',
        exposedToPositivePerson: 'सकारात्मक व्यक्ति से अवगत कराया',
        testedPositiveForCovid19: 'कोविद -19 के लिए सकारात्मक परीक्षण किया',
        testedNegativeForCovid19: 'कोविद -19 के लिए नकारात्मक परीक्षण किया गया',
        vaccinatedForCovid19: 'कोविद -19 के लिए टीका लगाया गया',
      },
      columns: {
        employeeNum: 'कर्मचारी#',
        name: 'नाम',
        location: 'स्थान',
        timeContacted: 'समय से संपर्क किया',
        gpsLatitude: 'जीपीएस अक्षांश',
        gpsLongitude: 'जीपीएस देशांतर',
        indoorXCoordinate: 'इनडोर एक्स समन्वय',
        indoorYCoordinate: 'इंडोर वाई समन्वय',
        geoSubsiteName: 'भू-सूक्ष्मा नाम',
        crossingDate: 'पार करने की तारीख',
        status: 'स्थिति',
        timeRecorded: 'समय दर्ज किया गया',
        lastName: 'उपनाम',
        firstName: 'पहला नाम',
        startDate: 'आरंभ करने की तिथि',
        endDate: 'अंतिम तिथि',
        daysRemaining: 'बचे हुए दिन',
        timeOnSite: 'समय ऑनसाइट',
        minutesElapsed: 'मिनट बीत गए',
        documentName: 'दस्तावेज़ का नाम',
        hierarchy: 'अनुक्रम',
        version: 'संस्करण',
        lastUpdated: 'आखरी अपडेट',
        lastUpdatedBy: 'अंतिम अपडेट',
        type: 'प्रकार',
        assessmentDate: 'मूल्यांकन तिथि',
      },
      chartComboHealthStatus: {
        weeklyEmployeeSymptomsVsCloseContacts: 'साप्ताहिक कर्मचारी लक्षण बनाम करीबी संपर्क',
        week: 'सप्ताह',
        numOfDay: 'कर्मचारियों की संख्या',
        reportedSymptomatic: 'लक्षण लक्षण की सूचना दी',
        closeContactOccurences: 'संपर्क संपर्क बंद करें',
      },
      stats: 'आँकड़े',
      needsTemperature: 'तापमान की आवश्यकता है',
      assessmentFailures: 'मूल्यांकन में विफलता',
      quarantineList: 'संगरोध सूची',
      protocols: 'प्रोटोकॉल',
    },
    selfAssessment: {
      menu: 'आत्म मूल्यांकन',
      pageTitle: 'स्व मूल्यांकन',
      title: 'पिछला मूल्यांकन',
      healthStatus: "Health Status??",
      cardTitle: "Latest Self Assesment??",
      noRisk: {
        cardTitle: 'कोई खतरा नहीं',
        consequences: 'मान्य प्रवेश',
        recommendations: 'सुरक्षित रूप से दर्ज करें सामाजिक गड़बड़ी रखें हाथ धोएं अक्सर सैनिटाइज़र का उपयोग करें',
      },
      lowRisk: {
        status: 'कम जोखिम',
        consequences: '1 दिन के लिए या समाधान होने तक कोई प्रवेश नहीं',
        recommendations: 'पीपीई प्राप्त करें',
      },
      mediumRisk: {
        status: 'मध्यम जोखिम',
        consequences: 'यात्रा वापसी की तारीख से न्यूनतम 14 दिनों के लिए कोई प्रवेश नहीं',
        recommendations: 'स्वयं को अलग',
      },
      highRisk: {
        status: 'भारी जोखिम',
        consequences: 'न्यूनतम 21 दिनों के लिए या हल किए जाने तक कोई प्रवेश नहीं',
        recommendations: '911 पर कॉल करें अस्पताल सेल्फ आइसोलेट अपने डॉक्टर को बुलाएं',
      },
      additionalInfo: "Additional Informartion??",
      quarantineLocation: "Quarantine Location??",
      quarantineLocationDescription: 'क्या आप अगले 14 दिनों में यात्रा करने की योजना बना रहे हैं',
      plantToTravel: 'Do you plan to travel in the next 14 days??',
      haveYouTravelled: 'क्या आपने पिछले 14 दिनों में यात्रा की है',
      travelledRecently: 'हाल ही में यात्रा की',
      fever: 'बुखार',
      tiredness: 'थकान',
      dryCough: 'सूखी खांसी',
      achesAndPains: 'दर्द एवं पीड़ा',
      nasalCongestion: 'नाक बंद',
      runnyNose: 'बहती नाक',
      soreThroat: 'गले में खराश',
      diarrhea: 'दस्त',
      difficultyBreathing: 'सांस लेने मे तकलीफ',
      exposedToPositivePerson: 'सकारात्मक व्यक्ति से अवगत कराया',
      testedPositiveForCovid19: 'कोविद -19 के लिए सकारात्मक परीक्षण किया',
      testedNegativeForCovid19: 'कोविद -19 के लिए नकारात्मक परीक्षण किया गया',
      vaccinatedForCovid19: 'कोविद -19 के लिए टीका लगाया गया',
      pickOne: 'एक चुनें',
      healthy: 'स्वस्थ',
      quarantined: 'क्वारंटाइन किए गए',
      symptomatic: 'Symptomic',
      death: 'मौत',
      recovered: 'बरामद',
      nurse: 'नर्स',
      self: 'स्वयं',
      all: 'सब',
    },
    healthAssessments: {
      menu: 'Health Assessments??',
      pageTitle: 'Health Assesments??',
      title: 'Previous Assessments??',
      selectEmployee: "Please select employee??"
    },
    dashboardContactTracing: {
      name: 'ट्रेसिंग डैशबोर्ड से संपर्क करें',
      label: 'ट्रेसिंग डैशबोर्ड से संपर्क करें',
      menu: 'ट्रेसिंग डैशबोर्ड से संपर्क करें',
      charts: {
        day: 'दिन',
        months: {
          1: 'जनवरी',
          2: 'फरवरी',
          3: 'मार्च',
          4: 'अप्रैल',
          5: 'मई',
          6: 'जून',
          7: 'जुलाई',
        },
        onsite: 'साइट पर',
        offsite: 'ऑफ साइट',
        unknown: 'अनजान',
        totalNumOfContactsPerDay: 'प्रति दिन कुल # करीब संपर्क',
        numOfCloseContactsOccurancePerDay: '# संपर्क संपर्क / दिन बंद करें',
        totalNumOfContactsPerWeek: 'प्रति सप्ताह कुल # बंद संपर्क',
        numOfCloseContactsOccurancePerWeek: '# संपर्क संपर्क / सप्ताह बंद करें',
        areaWithHighestRateOfCloseContact: 'उच्चतम संपर्क के उच्चतम दर वाले क्षेत्र',
        numberOfOccurances: 'अवसरों की संख्या',
        siteArea: 'साइट क्षेत्र',
        employeeWithHighestRateOfCloseContact: 'निकट संपर्क की उच्चतम दर वाले कर्मचारी',
        totalEmployeeGeoFenceStatusLast7Days: 'कुल कर्मचारी Geofence स्थिति पिछले 7 दिन',
      },
      reportHeader: {
        employeeGeoFenceStatusMTD: 'कर्मचारी Geofence स्थिति MTD',
        employeeGeoFenceStatusToday: 'कर्मचारी जिओफेंस स्थिति आज',
      },
    },
    dashboardEmployeeHealth: {
      name: 'कर्मचारी स्वास्थ्य डैशबोर्ड',
      label: 'कर्मचारी स्वास्थ्य डैशबोर्ड',
      menu: 'कर्मचारी स्वास्थ्य डैशबोर्ड',
      charts: {
        day: 'दिन',
        months: {
          1: 'जनवरी',
          2: 'फरवरी',
          3: 'मार्च',
          4: 'अप्रैल',
          5: 'मई',
          6: 'जून',
          7: 'जुलाई',
        },
        weeklyEmployeeSymptonsVsCloseContacts: 'साप्ताहिक कर्मचारी लक्षण बनाम करीबी संपर्क',
        week: 'सप्ताह',
        numOfDay: 'कर्मचारियों की संख्या',
        reportedSymptomatic: 'लक्षण लक्षण की सूचना दी',
        closeContactOccurences: 'संपर्क संपर्क बंद करें',
        topWorkAreaswithSymptomaticEmployees: 'लक्षण कर्मचारियों के साथ शीर्ष कार्य क्षेत्र',
        numberOfEmployeesSymptomatic: 'कर्मचारियों की संख्या रोगसूचक',
        siteOrArea: 'साइट क्षेत्र',
        employeeHealthStatistics: 'कर्मचारी स्वास्थ्य सांख्यिकी',
        averageEmployeeTemperaturelast14Days: 'औसत कर्मचारी तापमान',
        noIssues: 'कोई बात नहीं',
        closeContact: 'नज़दीकी संपर्क',
        symptomatic: 'रोगसूचक',
        confirmed: 'की पुष्टि',
        recovered: 'बरामद',
        deaths: 'मौतें',
      },
    },
    dashboardHardwareHealth: {
      name: 'हार्डवेयर डैशबोर्ड',
      label: 'हार्डवेयर डैशबोर्ड',
      menu: 'हार्डवेयर डैशबोर्ड',
      mtd: 'महीना आज तक',
      daily: 'रोज',
      reportGateway: 'गेटवे रिपोर्ट',
      reportBangle: 'चूड़ी की रिपोर्ट',
      reportPuck: 'पक रिपोर्ट',
      reportiPhone: 'iPhone रिपोर्ट',
      reportAndroid: 'Android रिपोर्ट',
      reportTotalDevices: 'कुल डिवाइस रिपोर्ट',
      charts: {
        active: 'सक्रिय',
        inActive: 'निष्क्रिय',
      },
    },
    dashboardArcFlash: {
      name: 'Arc Flash Dashboard??',
      label: 'Arc Flash Dashboard??',
      menu: 'Arc Flash Dashboard??',
      reportGroupByPpe: 'Total Assets broken down by PPE Category??',
      auditReviewsExpiry: 'Assets needing audit review in days??',
      charts: {
        extremeDanger: 'Extreme Danger??',
        ppe0: 'PPE 0??',
        ppe1: 'PPE 1??',
        ppe2: 'PPE 2??',
        ppe3: 'PPE 3??',
        ppe4: 'PPE 4??',
        unknown: 'Unknown??',
        count: 'Count??',
        days: 'Days??'
      }
    },
    dashboardLOTO: {
      name: 'LOTO Dashboard??',
      label: 'LOTO Dashboard??',
      menu: 'LOTO Dashboard??',
      ticketByReason: 'Tickets By Reason??',
      completedTickets: 'Completed Tickets??',
      activeTickets: 'Active Tickets??',
      ofScheduledTickets: 'Of Scheduled Tickets??',
      totalActiveEquipmentLocks: 'Total # Of Active Equipment Locks??',
      locksByAreaSubareaDevices: 'Locks By Site/Area/SubArea/Devices??',
      unlocksByAreaSubAreaDevices: 'Unlocks By Site/Area/sSubArea/Devices??',
      enumerators: {
        completedTickets: {
          wtd: "WTD??",
          mtd: "MTD??",
          ytd: "YTD??"
        },
        scheduledTickets: {
          nextSevenDays: 'Next 7 Days??',
          nextFourteenDays: 'Next 14 Days??',
          nextThirtyDays: 'Next 30 days??'
        }
      },
      ticketByReasonChart: {
        xLabel: 'Reason??',
        yLabel: 'Number Of Tickets??'
      },
      activeTicketsChart: {
        schedule: 'Schedule??',
        inProgress: "In Progress??"
      },
      equipmentsTicketsChart: {
        locks: 'Locks??',
        unLocks: 'Unlocks??'
      },
      tableColumns: {
        locks: {
          label: "# Of Locks??",
          name: "locks??"
        },
        area: {
          label: "Area??",
          name: "area??"
        },
        lastLockEvent: {
          label: "Last Lock Event??",
          name: "lastLockEvent??"
        }
      }
    },
    configGeofences: {
      name: 'Geofences कॉन्फ़िगर करें',
      label: 'Geofences कॉन्फ़िगर करें',
      menu: 'Geofences कॉन्फ़िगर करें',
    },
    mapOutdoorIndoor: {
      name: 'मैपिंग आउटडोर / इनडोर',
      label: 'मैपिंग आउटडोर / इनडोर',
      menu: 'मैपिंग आउटडोर / इनडोर',
      employeeOrAssetList: 'कर्मचारी / परिसंपत्ति सूची',
      filter: 'फ़िल्टर',
      latitude: 'अक्षांश',
      longitude: 'देशान्तर',
      zoom: 'ज़ूम',
      bearing: 'सहनशीलता',
      pitch: 'पिच',
      people: 'लोग',
      bleGateways: 'BLE गेटवे',
      bleBeacons: 'BLE बीकन',
      employeesProtected: 'कर्मचारियों ने सुरक्षा की',
      socialDistancingCompliance: 'सामाजिक दूरी का अनुपालन',
      nonCompliant: 'गैर-संगत',
      teamMemberAtRisk: 'जोखिम में टीम के सदस्य',
      immune: 'इम्यून',
      noContactsToDisplay: 'प्रदर्शित करने के लिए कोई संपर्क नहीं',
      customLabelName: 'कस्टम लेबल नाम',
      atRisk: 'खतरे में',
      arcflashes: 'आर्क फ्लैश??'
    },
    assetMapping: {
      menu: 'एसेट मैपिंग',
      assets: 'संपत्ति',
      dragAndDrop: 'खींचें और छोड़ें',
      assetOnMap: 'उस स्थान पर एक नई संपत्ति बनाने के लिए नक्शे पर संपत्ति',
      bleBeacon: 'BLE बीकन',
      bleGateway: 'BLE गेटवे',
      entireArea: 'संपूर्ण क्षेत्र',
      arcflash: 'Arc Flash??',
      assetOnMapEdit1: 'Search existing asset,??',
      assetOnMapEdit2: 'unmapped asset on map to add a location to it??',
      new: 'New??',
      existing: 'Existing??'
    },
    document: {
      name: 'दस्तावेज़',
      label: 'दस्तावेज़',
      menu: 'दस्तावेज़',
      exporterFileName: 'document_export',
      list: {
        menu: 'दस्तावेज़',
        title: 'दस्तावेज़',
      },
      create: {
        success: 'दस्तावेज़ सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'दस्तावेज़ सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'दस्तावेज़ सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'दस्तावेज़ को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'दस्तावेज़ संपादित करें',
      },
      fields: {
        id: 'ईद',
        docType: 'दस्तावेज़ का प्रकार',
        docCategory: 'दस्तावेज़ श्रेणी',
        sourceId: 'स्रोत',
        name: 'नाम',
        url: 'यूआरएल',
        tagList: 'टैग सूची',
        version: 'संस्करण',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSection: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      enumerators: {
        docType: {
          Pandemic: 'सर्वव्यापी महामारी',
          ArcFlash: 'वेल्डिंग की रोशनी',
          LOTO: 'ढेर सारा',
          BleGateway: 'BleGateway??',
        },
      },
      new: {
        title: 'नया दस्तावेज़',
      },
      view: {
        title: 'दस्तावेज़ देखें',
      },
      importer: {
        title: 'आयात दस्तावेज़',
        fileName: 'document_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    asset: {
      name: 'संपत्ति',
      label: 'संपत्ति',
      menu: 'संपत्ति',
      exporterFileName: 'asset_export??',
      list: {
        menu: 'संपत्ति',
        title: 'संपत्ति',
      },
      create: {
        success: 'एसेट सफलतापूर्वक बच गया',
      },
      update: {
        success: 'एसेट सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'एसेट सफलतापूर्वक हटाया गया',
        destroyAll: {
          success: 'एसेट (ओं) को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'एसेट संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        assetType: 'संपदा प्रकार',
        assetCategory: 'Asset Category??',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        productType: 'उत्पाद प्रकार',
        warningLabelImageUrl: 'चेतावनी लेबल छवि',
        limitedApproachBoundaryRange: 'सीमित दृष्टिकोण सीमा',
        limitedApproachBoundary: 'सीमित दृष्टिकोण सीमा',
        restrictedApproachBoundaryRange: 'प्रतिबंधित दृष्टिकोण सीमा',
        restrictedApproachBoundary: 'प्रतिबंधित दृष्टिकोण सीमा',
        prohibitedApproachBoundaryRange: 'निषिद्ध दृष्टिकोण सीमा',
        prohibitedApproachBoundary: 'निषिद्ध दृष्टिकोण सीमा',
        predictedArcingCurrentRange: 'पूर्वनिर्धारित वर्तमान',
        predictedArcingCurrent: 'पूर्वनिर्धारित वर्तमान',
        arcDurationRange: 'आर्क अवधि',
        arcDuration: 'आर्क अवधि',
        incidentEnergyRange: 'घटना ऊर्जा',
        incidentEnergy: 'घटना ऊर्जा',
        ppeRequirementsFootHand: 'पीपीई आवश्यकताएँ पैर / हाथ',
        ppeREquirementsEyeHead: 'PPE REQUirements आई / हेड',
        ppeRequirementsBody: 'पीपीई आवश्यकताएँ शरीर',
        documents: 'दस्तावेज़',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        Password: 'कुंजिका',
        LastHeartbeat: 'लास्ट हार्ट बीट डेट',
        ipaddress: 'आईपी ​​पता',
        state: 'राज्य',
        hostname: 'होस्ट का नाम',
        softwareVersion: 'सॉफ्टवेयर संस्करण',
        environmentVersion: 'पर्यावरण संस्करण',
        osVersion: 'OS संस्करण',
        Latitude: 'अक्षांश',
        Longitude: 'देशान्तर',
        X: 'एक्स',
        Y: 'Y',
        location: 'स्थान',
        deviceType: 'उपकरण का प्रकार',
        deviceTypeName: 'उपकरण प्रकार नाम',
        softwareUpdateStatus: 'सॉफ़्टवेयर अद्यतन स्थिति',
        CheckWifiIPAddress: 'वाईफ़ाई IPAddress की जाँच करें??',
        energyDistHierarchyId: 'Energy Distribution Hierachy??',
        upstreamIds: 'Upstream Assets??',
        upstreamId: 'Upstream Asset??',
        workingDistance: 'Working Distance??',
        afBoundary: 'Arc Flash Boundary??',
        shockHazard: 'Shock Hazard??',
        ppeCategory: 'PPE Category??',
        standardsOrg: 'Standards Org??',
        analysisBy: 'Analysis By??',
        analysisInitialDate: 'Analysis Initial Date??',
        analysisLastUpdated: 'Analysis Last Updated??',
        analysisReviewDueDate: 'Analysis Review Due Date??',
        deviceTypeId: 'Device Type??',
        ppeInfo: 'PPE Info??',
        assetId: 'Asset??',
        onlyUnmapped: 'Only Unmapped??',
        selectedId: 'Select Hierarchy??',
        selectedAssets: 'Select Asset(s)??',
        selectedAsset: 'select Asset??',
        color: 'Color??',
        hasArcFlash: 'Has ArcFlash??',
        hasLOTO: 'Has LOTO??',
        isIsolationPoint: 'is Isolation Point??',
        energySourceDesc: 'Energy Source Desc??',
        energySourceLocation: 'Energy Source Location??',
        lockoutMethod: 'Lockout Method??',
        lockoutDevice: 'Lockout Device??',
        lotoNote: 'LOTO Note??',
        lockoutApplicationProcess: 'Lockout Application Process??',
        lockoutRemovalProcess: 'Lockout Removal Process??',
        locks: '#Locks??',
        lockStatus: 'Lock Status??'
      },
      updateAvailable: 'अपडेट उपलब्ध',
      upToDate: 'आधुनिक',
      enumerators: {
        assetType: {
          ArcFlash: 'वेल्डिंग की रोशनी',
          Machine: 'Machine',
          PLC: 'PLC',
          BleGateway: 'BleGateway??',
          BleBeacon: 'BleBeacon??',
        },
      },
      new: {
        title: 'नई संपत्ति',
      },
      view: {
        title: 'संपत्ति देखें',
        downloadSetings: 'डाउनलोड सेटिंग्स',
      },
      importer: {
        title: 'आयात संपत्ति',
        fileName: 'asset_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
      deleteWarning: 'If this Asset is a Root Node of any Energy Hierarchy, Entire Energy Hierarchy will be deleted!??',
      deleteWarningMany: 'If any Asset of the selected row(s) is a Root Node of any Energy Hierarchy, Entire Energy Hierarchy will be deleted!??',
      energySources: 'Energy Sources??',
      energyHierarchy: 'Energy Hierarchy??',
      lotoProcedure: 'LOTO Procedure??',
      arcFlashLabel: 'ArcFlash Label??'
    },
    blegateway: {
      name: 'blegateway??',
      label: 'BleGateways??',
      menu: 'BleGateways??',
      exporterFileName: 'blegateway_export??',
      list: {
        menu: 'BleGateways??',
        title: 'BleGateways??',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        description: 'विवरण',
        properties: 'गुण',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        Password: 'कुंजिका',
        LastHeartbeat: 'लास्ट हार्ट बीट',
        ipaddress: 'आईपी ​​पता',
        state: 'राज्य',
        hostname: 'होस्ट का नाम',
        softwareVersion: 'सॉफ्टवेयर संस्करण',
        environmentVersion: 'पर्यावरण संस्करण',
        osVersion: 'OS संस्करण',
      },
    },
    cloudadmin: {
      menu: 'क्लाउड एडमिन',
      title: 'बैकएंड सर्वर लॉग',
    },
    wearablesUpdate: {
      menu: 'Wearables अद्यतन',
      connect: 'जुडिये',
      diconnected: 'Diconnected??',
      minorCode: 'मामूली कोड',
      sendCmd: 'CMD भेजें',
      getsettings: 'getSettings??',
      getversion: 'getVersion??',
      getuuidminorcode: 'getUUIDMinorCode??',
      timesync: 'timeSync??',
      upload: 'डालना',
      reboot: 'रिबूट',
      setsettings: 'setSettings??',
      puck: 'शरारती बच्चा',
      uploadfile: 'दस्तावेज अपलोड करें',
      history: 'इतिहास',
    },
    envvariables: {
      menu: 'चर चर',
    },
    downloads: {
      downloads: 'डाउनलोड',
      label: 'डाउनलोड',
      menu: 'डाउनलोड',
      android: 'SafetyAssist मोबाइल - Android',
      iphone: 'SafetyAssist मोबाइल - IOS (iphone, ipad)',
      diawi: 'या डियावी से स्थापित करें',
    },
    pandemicAssessment: {
      name: 'pandemicAssessment',
      label: 'महामारी आकलन',
      menu: 'महामारी आकलन',
      exporterFileName: 'pandemicAssessment_export',
      list: {
        menu: 'महामारी आकलन',
        title: 'महामारी आकलन',
      },
      create: {
        success: 'महामारी आकलन सफलतापूर्वक बच गया',
      },
      update: {
        success: 'महामारी आकलन सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'महामारी आकलन सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'महामारी का मूल्यांकन सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'महामारी मूल्यांकन संपादित करें',
      },
      fields: {
        id: 'ईद',
        hasFlu: 'फ़्लू',
        hasHeadache: 'सरदर्द',
        status: 'स्थिति',
        recommendedAction: 'अनुशंसित कार्रवाई',
        hasDryCough: 'सूखी खांसी',
        employeeId: 'मरीज़',
        assessedById: 'के द्वारा आंका गया',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      enumerators: {
        status: {
          Unknown: 'अनजान',
          Symptomatic: 'रोगसूचक',
          Healthy: 'स्वस्थ',
        },
        recommendedAction: {
          None: 'कोई नहीं',
          IsolationAtWork: 'IsolationAtWork??',
          IsolationAtHome: 'IsolationAtHome??',
          Hospitalization: 'अस्पताल में भर्ती',
          DoctorFollowup: 'DoctorFollowup??',
        },
      },
      new: {
        title: 'नई महामारी का आकलन',
      },
      view: {
        title: 'महामारी आकलन देखें',
      },
      importer: {
        title: 'आयात महामारी आकलन',
        fileName: 'pandemicAssessment_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    pandemicTemperature: {
      name: 'pandemicTemperature??',
      label: 'महामारी तापमान',
      menu: 'महामारी तापमान',
      exporterFileName: 'pandemicTemperature_export??',
      list: {
        menu: 'महामारी तापमान',
        title: 'महामारी तापमान',
      },
      create: {
        success: 'महामारी तापमान सफलतापूर्वक बचाया',
      },
      update: {
        success: 'महामारी तापमान सफलतापूर्वक बचाया',
      },
      destroy: {
        success: 'महामारी तापमान सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'महामारी तापमान (ओं) को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'महामारी तापमान संपादित करें',
      },
      fields: {
        id: 'ईद',
        takenById: 'द्वारा उठाए गए',
        temperatureRange: 'तापमान',
        temperature: 'तापमान',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नई महामारी तापमान',
      },
      view: {
        title: 'महामारी तापमान देखें',
      },
      importer: {
        title: 'आयात महामारी तापमान',
        fileName: 'pandemicTemperature_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    pandemicCountry: {
      name: 'pandemicCountry??',
      label: 'महामारी वाले देश',
      menu: 'महामारी वाले देश',
      exporterFileName: 'pandemicCountry_export??',
      list: {
        menu: 'महामारी वाले देश',
        title: 'महामारी वाले देश',
      },
      create: {
        success: 'महामारी देश सफलतापूर्वक बच गया',
      },
      update: {
        success: 'महामारी देश सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'महामारी देश सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'महामारी देश सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'महामारी देश संपादित करें',
      },
      fields: {
        id: 'ईद',
        country: 'देश',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नई महामारी देश',
      },
      view: {
        title: 'महामारी देश देखें',
      },
      importer: {
        title: 'आयात महामारी देशों',
        fileName: 'pandemicCountry_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
      pandemicCountryStats: {
        name: 'pandemicCountryStats??',
        label: 'महामारी देश के आँकड़े',
        menu: 'महामारी देश के आँकड़े',
        exporterFileName: 'pandemicCountryStats_export??',
        list: {
          menu: 'महामारी देश के आँकड़े',
          title: 'महामारी देश के आँकड़े',
        },
        create: {
          success: 'महामारी देश के आँकड़े सफलतापूर्वक बच गए',
        },
        update: {
          success: 'महामारी देश के आँकड़े सफलतापूर्वक बच गए',
        },
        destroy: {
          success: 'महामारी देश के आँकड़े सफलतापूर्वक हटा दिए गए',
          destroyAll: {
            success: 'महामारी देश के आँकड़े सफलतापूर्वक हटाए गए',
          },
        },
        edit: {
          title: 'महामारी देश के आँकड़े संपादित करें',
        },
        fields: {
          id: 'ईद',
          country: 'देश',
          confirmedRange: 'की पुष्टि',
          confirmed: 'की पुष्टि',
          recoveredRange: 'बरामद',
          recovered: 'बरामद',
          criticalRange: 'नाजुक',
          critical: 'नाजुक',
          deathsRange: 'मौतें',
          deaths: 'मौतें',
          latitudeRange: 'अक्षांश',
          latitude: 'अक्षांश',
          longitudeRange: 'देशान्तर',
          longitude: 'देशान्तर',
          createdAt: 'पर बनाया गया',
          updatedAt: 'पर अपडेट किया गया',
          createdAtRange: 'पर बनाया गया',
        },
        new: {
          title: 'नई महामारी देश के आँकड़े',
        },
        view: {
          title: 'महामारी देश के आँकड़े देखें',
        },
        importer: {
          title: 'आयात महामारी देश के आँकड़े',
          fileName: 'pandemicCountryStats_import_template??',
          hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
        },
      },
    },
    locations: {
      name: 'स्थानों',
      label: 'स्थान',
      menu: 'स्थान',
      exporterFileName: 'locations_export??',
      list: {
        menu: 'स्थान',
        title: 'स्थान',
      },
      create: {
        success: 'स्थान सफलतापूर्वक सहेजे गए',
      },
      update: {
        success: 'स्थान सफलतापूर्वक सहेजे गए',
      },
      destroy: {
        success: 'स्थान सफलतापूर्वक हटा दिए गए',
        destroyAll: {
          success: 'स्थान सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'स्थान संपादित करें',
      },
      fields: {
        id: 'ईद',
        userId: 'यूज़र आईडी',
        deviceId: 'डिवाइस आईडी',
        latitudeRange: 'अक्षांश',
        latitude: 'अक्षांश',
        longitudeRange: 'देशान्तर',
        longitude: 'देशान्तर',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नए स्थान',
      },
      view: {
        title: 'स्थान देखें',
      },
      importer: {
        title: 'आयात स्थान',
        fileName: 'locations_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
      downloads: {
        downloads: 'डाउनलोड',
        label: 'डाउनलोड',
        menu: 'डाउनलोड',
      },
    },
    assets: {
      name: 'संपत्ति',
      label: 'संपत्ति',
      menu: 'संपत्ति',
      exporterFileName: 'Assets_exportados',
      list: {
        menu: 'संपत्ति',
        title: 'संपत्ति',
      },
      create: {
        success: 'सैल्वो कॉम सक्सो की संपत्ति',
      },
      update: {
        success: 'सैल्वो कॉम सक्सो की संपत्ति',
      },
      destroy: {
        success: 'एसेटो हटाओ कॉम सक्सो',
        destroyAll: {
          success: 'एसेट्स (एस) डिलीटेड कॉम सक्सो',
        },
      },
      edit: {
        title: 'एडिटर्स एसेट्स',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        name: 'नाम',
        description: 'विवरण',
        refNum: 'RefNum??',
        productType: 'उत्पाद प्रकार',
        documents: 'दस्तावेज़',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'Criado em??',
      },
      new: {
        title: 'नोवो एसेट्स',
      },
      view: {
        title: 'विजुअलिज़र एसेट्स',
      },
      importer: {
        title: 'आयातक संपत्ति',
        fileName: 'Assets_template_importacao??',
        hint: 'Arquivos / Imagens devem ser के रूप में URLs dos arquivos, विभाजक पोर एस्पाको। Relacionamentos devem ser os IDs से अलग हो जाता है जो कि por espaço है।',
      },
    },
    energyLocks: {
      name: 'energyLocks??',
      label: 'Energy Locks??',
      menu: 'Energy Locks??',
      exporterFileName: 'energyLocks_export??',
      list: {
        menu: 'Energy Locks??',
        title: 'Energy Locks??',
      },
      tabs: {
        currentLocks: 'Current Locks??',
        lockHistory: 'Lock History??',
      },
      create: {
        success: 'Energy Lock saved successfully??',
      },
      update: {
        success: 'Energy Lock saved successfully??',
      },
      destroy: {
        success: 'Energy Lock deleted successfully??',
        destroyAll: {
          success: 'Energy Lock(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Energy Lock??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        assetId: 'Asset Id??',
        locks: '#Locks??',
        energyDistHierarchyId: 'Energy Hierarchy??',
        lastLockDate: 'Last Lock Date??',
        employeeId: 'Employee??',
        lockIdentifierNum: 'Lock Identifier#??',
        lockStatus: 'Lock Status??',
        date: 'Date??',
        orgPlantId: 'कारख़ाना',
        orgId: 'संगठन',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Energy Lock??',
      },
      view: {
        title: 'View Energy Lock??',
      },
      enumerators: {
        lockStatus: {
          locked: 'Locked??',
          lockedAndTagged: 'Locked and Tagged??',
          unlocked: 'Unlocked??',
        },
      }
    },
    lotoTickets: {
      name: 'lOTOTickets??',
      label: 'LOTO टिकट',
      menu: 'LOTO टिकट',
      exporterFileName: 'lOTOTickets_export',
      list: {
        menu: 'LOTO टिकट',
        title: 'LOTO टिकट',
      },
      create: {
        success: 'LOTO टिकट सफलतापूर्वक सहेजे गए',
      },
      update: {
        success: 'LOTO टिकट सफलतापूर्वक सहेजे गए',
      },
      destroy: {
        success: 'LOTO टिकट को सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'LOTO टिकट सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'LOTO टिकट संपादित करें',
      },
      approve: {
        success: 'LOTO Ticket approved successfully??',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        employeeId: 'Created By??',
        ticketNum: 'Ticket#??',
        reasonId: 'Reason??',
        scheduledStartDate: 'Scheduled Start Date??',
        description: 'Description??',
        scheduledEndDate: 'Scheduled End Date??',
        assetsList: 'Assets??',
        employeesList: 'Employees allowed to lock/unlock the assets??',
        ticketStatus: 'Ticket Status??',
        requiredPPE: 'Required PPE??',
        requiredBarriers: 'Required Barriers??',
        type: 'Type??',
        address: 'Address??',
        approvalList: 'Approval List??',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      lockAlerts: 'Lock Alerts??',
      unlockAlerts: 'Unlock Alerts??',
      currentLocks: 'Current Locks??',
      documents: 'Documents??',
      lotoNotes: 'Loto Notes??',
      asset: 'Asset Id??',
      locks: '#Locks??',
      assets: 'Asset??',
      note: 'Note??',
      documentName: 'Name??',
      documentUrl: 'Document??',
      enumerators: {
        ticketStatus: {
          All: 'All??',
          Scheduled: 'Scheduled??',
          InProgress: 'In Progress??',
          Completed: 'Completed??',
          Cancelled: 'Cancelled??'
        },
        lotoAlertTypes: {
          SMS: 'SMS??',
          EMAIL: 'EMAIL??'
        }
      },
      new: {
        title: 'नई LOTO टिकट',
      },
      view: {
        title: 'LOTO टिकट देखें',
      },
      importer: {
        title: 'LOTO एसेट आयात करें',
        fileName: 'lOTOTickets_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
      helpTable: {
        lockingDeviceTable: {
          header: {
            "column1": "Steps for locking a device??",
            "column2": "State: Unlocked->Locked??",
          },
          rows: {
            "row1": { "step": "Step 1??", "description": "Login to Mobile App??", "state": '' },
            "row2": { "step": "Step 2??", "description": "Identify Area, Sub-Area, Sub-Sub-Area??", "state": "" },
            "row3": { "step": "Step 3??", "description": "Identify a device to be locked (Equipment, Line, System)??", "state": "" },
            "row4": { "step": "Step 4??", "description": "Put a physical Lock on the device??", "state": "" },
            "row5": { "step": "Step 5??", "description": "Create a digital TagOut??", "state": "Optional - Take a photo of your lock and attach to your digital TagOut??" }
          }
        },
        removingLockWithQRTable: {
          header: {
            "column1": "Steps for removing a lock using QR Code??",
            "column2": "State: Locked->Unlocked??",
          },
          rows: {
            "row1": { "step": "Step 1??", "description": "Load the selected QR code??", "state": '' },
            "row2": { "step": "Step 2??", "description": "Remove your physical lock??", "state": "Optional - Take a photo of removed lock and attach to your digital TagOut??" },
            "row3": { "step": "Step 3??", "description": "Remove your digital lock??", "state": "" },
            "row4": { "step": "Step 4??", "description": "Last lock removed changes state??", "state": "" },

          }
        },
        removingLockManuallyTable: {
          header: {
            "column1": "Steps for removing a lock manually??",
            "column2": "",
          },
          rows: {
            "row1": { "step": "Step 1??", "description": "Login to Mobile App??", "state": '' },
            "row2": { "step": "Step 2??", "description": "Identify Area, Sub-Area, Sub-Sub-Area??", "state": "" },
            "row3": { "step": "Step 3??", "description": "Identify the device you want to remove your lock??", "state": "" },
            "row4": { "step": "Step 4??", "description": "Remove your physical lock??", "state": "Optional - Take a photo of removed lock and attach to your digital TagOut??" },
            "row5": { "step": "Step 5??", "description": "Remove your digital lock??", "state": "" },
          }
        },
      }
    },
    arcFlashAssets: {
      name: 'arcFlashAssets',
      label: 'आर्कफलाश एसेट',
      menu: 'आर्कफलाश एसेट',
      exporterFileName: 'arcFlashAssets_export??',
      list: {
        menu: 'आर्कफलाश एसेट',
        title: 'आर्कफलाश एसेट',
      },
      create: {
        success: 'ArcFlash एसेट सफलतापूर्वक बच गया',
      },
      update: {
        success: 'ArcFlash एसेट सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'ArcFlash एसेट सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'ArcFlash Asset (s) सफलतापूर्वक हटा दिए गए',
        },
      },
      edit: {
        title: 'ArcFlash एसेट संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        name: 'नाम',
        description: 'विवरण',
        deviceId: 'Device ID??',
        deviceTypeId: 'Device Type??',
        afBoundary: 'Arc Flash Boundary??',
        shockHazard: 'Shock Hazard??',
        ppeCategory: 'PPE Category??',
        standardsOrg: 'Standards Organization??',
        upstreamIds: 'Upstream Assets??',
        incidentEnergy: 'Incident Energy??',
        productType: 'उत्पाद प्रकार',
        warningLabelImageUrl: 'चेतावनी लेबल छवि',
        limitedApproachBoundaryRange: 'सीमित दृष्टिकोण सीमा',
        limitedApproachBoundary: 'सीमित दृष्टिकोण सीमा',
        restrictedApproachBoundaryRange: 'प्रतिबंधित दृष्टिकोण सीमा',
        restrictedApproachBoundary: 'प्रतिबंधित दृष्टिकोण सीमा',
        prohibitedApproachBoundaryRange: 'निषिद्ध दृष्टिकोण सीमा',
        prohibitedApproachBoundary: 'निषिद्ध दृष्टिकोण सीमा',
        predictedArcingCurrentRange: 'पूर्वनिर्धारित वर्तमान',
        predictedArcingCurrent: 'पूर्वनिर्धारित वर्तमान',
        arcDurationRange: 'आर्क अवधि',
        arcDuration: 'आर्क अवधि',
        incidentEnergyRange: 'घटना ऊर्जा',
        ppeRequirementsFootHand: 'पीपीई आवश्यकताएँ पैर / हाथ',
        ppeREquirementsEyeHead: 'PPE REQUirements आई / हेड',
        ppeRequirementsBody: 'पीपीई आवश्यकताएँ शरीर',
        documents: 'दस्तावेज़',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        arcFaultBusName: 'Arc Fault Bus Name??',
        arcFaultBuskV: 'Arc Fault Bus kV??',
        upstreamTripDeviceName: 'Upstream Trip Device Name???',
        busBoltedFault: 'Bus Bolted Fault (kA)??',
        busArcFault: 'Bus Arc Fault (kA)??',
        estArcFlashBoundary: 'Est Arc Flash Boundary (inches)??',
        workingDistance: 'Working Distance (inches)??',
        incidentEnergyCal: 'Incident Energy (cal/cm2)??',
        pPEComments: 'PPE / Comments??',
        equipmentLabelComment: 'Equipment Label Comment??',
        arcFlashFieldNames: 'ArcFlash Field Names??',
        analysisNextReviewDate: 'Analysis Next Review Date??',
        analysisBy: 'Analysis By??',
        analysisInitials: 'Analysis Initials??',
        energyHierarchy: 'Energy Hierarchy??',
        assetType: 'Asset Type??',
        energySourceLocation: 'Energy source location??',
        lockoutMethod: 'Lockout Method??',
        lockoutDevice: 'Lockout Device??',
        isIsolation: 'IsIsolation??',
        lotoHazardId: 'LOTO Lock Out Hazards??'
      },
      new: {
        title: 'न्यू आर्कफलाश एसेट',
      },
      view: {
        title: 'देखें आर्कफ्लैश एसेट',
      },
      importer: {
        title: 'आर्कफलाश एसेट आयात करें',
        fileName: 'arcFlashAssets_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
      validationMsg: {
        equipmentLabelComments_Empty: "Equipment label comment must have only one empty fields??",
        arcFaultBusName: "duplicated in arc fault bus name??",
        equipmentLabelComments_Not_Exist: "is not exist in arc fault bus name??",
        equipmentLabelComments_Same: "arc fault bus name and equipment label comment should not be same in single row??"
      }
    },
    arcFlashStandards: {
      name: 'arcFlashStandards',
      label: 'ArcFlash Standard??',
      menu: 'ArcFlash Standard??',
      exporterFileName: 'arcFlashStandards_export',
      list: {
        menu: 'ArcFlash Standard??',
        title: 'ArcFlash Standard??',
      },
      create: {
        success: 'ArcFlash Standard saved successfully??',
      },
      update: {
        success: 'ArcFlash Standard saved successfully??',
      },
      destroy: {
        success: 'ArcFlash Standard deleted successfully??',
        destroyAll: {
          success: 'ArcFlash Standard(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit ArcFlash Standard??',
      },
      fields: {
        id: 'Carné de identidad??',
        standardsOrg: 'Standards Org??',
        standardsOrgText: 'Input Standards Org??',
        ppeCategory: 'PPE Category??',
        definition: 'Definition??',
        color: 'Color??',
        maxCalPerCm: 'maxCalPerCm??',
        ppeHandFootText: 'PPE Hand Foot Text??',
        ppeHandFootImageUrl: 'PPE Hand Foot Image??',
        ppeEyeHeadText: 'PPE Eye Head Text??',
        ppeEyeHeadImageUrl: 'PPE Eye Head Image??',
        ppeBodyText: 'PPE Body Text??',
        ppeBodyImageUrl: 'PPE Body Image??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New ArcFlash Standard??',
      },
      view: {
        title: 'View ArcFlash Standard??',
      },
      extremeDanger: 'Extreme Danger??',
    },
    arcFlashPrintQrCodes: {
      name: 'arcFlashPrintQrCodes??',
      label: 'Arc Flash QR Codes??',
      menu: 'Print QR Codes??',
      list: {
        menu: 'Arc Flash QR Codes??',
        title: 'Arc Flash QR Codes??',
      },
      create: {
        success: 'Arc Flash QR Codes saved successfully??',
      },
      update: {
        success: 'Arc Flash QR Codes saved successfully??',
      },
      destroy: {
        success: 'Arc Flash QR Codes deleted successfully??',
        destroyAll: {
          success: 'Arc Flash QR Codes(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Arc Flash QR Codes??',
      },
      preview: {
        title: 'Arc Flash QR Codes Preview??',
        pdf: 'PDF??',
        noPreview: 'No QR codes to Preview??',
        message: 'Nothing to print!??',
      },
      fields: {
        id: 'Id??',
        orgId: 'Organization??',
        orgPlantId: 'Plant??',
        energyDistHierarchyId: 'Energy Distribution Hierarchy??',
        name: 'Name??',
        assetIds: 'Assets??',
        selectAll: 'Select All??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Arc Flash QR Codes??',
      },
      view: {
        title: 'View Arc Flash QR Codes??',
      }
    },
    documentCategories: {
      name: 'documentCategories??',
      label: 'Document Categories??',
      menu: 'Document Categories??',
      exporterFileName: 'documentCategories_export??',
      list: {
        menu: 'Document Categories??',
        title: 'Document Categories??',
      },
      create: {
        success: 'Document Category saved successfully??',
      },
      update: {
        success: 'Document Category saved successfully??',
      },
      destroy: {
        success: 'Document Category deleted successfully??',
        destroyAll: {
          success: 'Document Category(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Document Category??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Document Category??',
      },
      view: {
        title: 'View Document Category??',
      },
    },
    lotoReasons: {
      name: 'lotoTicketReasons??',
      label: 'LOTO Ticket Reasons??',
      menu: 'LOTO Ticket Reasons??',
      exporterFileName: 'lotoTicketReasons_export??',
      list: {
        menu: 'LOTO Ticket Reasons??',
        title: 'LOTO Ticket Reasons??',
      },
      create: {
        success: 'LOTO Ticket Reason saved successfully??',
      },
      update: {
        success: 'LOTO Ticket Reason saved successfully??',
      },
      destroy: {
        success: 'LOTO Ticket Reason deleted successfully??',
        destroyAll: {
          success: 'LOTO Ticket Reason(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit LOTO Ticket Reason??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New LOTO Ticket Reason??',
      },
      view: {
        title: 'View LOTO Ticket Reason??',
      },
    },
    lotoAssets: {
      name: 'lotoAssets??',
      label: 'LOTO Assets??',
      menu: 'LOTO Assets??',
      list: {
        menu: 'LOTO Assets??',
        title: 'LOTO Assets??',
      },
      details: 'Details??',
      tableColumns: {
        energySource: {
          name: 'energySource??',
          label: 'Energy Source??'
        },
        energyHierarchy: {
          name: 'energyHierarchy??',
          label: 'Energy Hierarchy??'
        },
        lockMethod: {
          name: 'lockMethod??',
          label: 'Lock Method??'
        },
        lockDevice: {
          name: 'lockDevice??',
          label: 'Lock Device??'
        },
        lockStatus: {
          name: 'overallLockStatus??',
          label: 'Lock Status??'
        }
      }
    },
    lotoBarriers: {
      name: 'lotoBarriers??',
      label: 'LOTO Barriers??',
      menu: 'LOTO Barriers??',
      exporterFileName: 'lotoBarriers_export??',
      list: {
        menu: 'LOTO Barriers??',
        title: 'LOTO Barriers??',
      },
      create: {
        success: 'LOTO Barrier saved successfully??',
      },
      update: {
        success: 'LOTO Barrier saved successfully??',
      },
      destroy: {
        success: 'LOTO Barrier deleted successfully??',
        destroyAll: {
          success: 'LOTO Barrier(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit LOTO Barrier??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New LOTO Barrier??',
      },
      view: {
        title: 'View LOTO Barrier??',
      },
    },
    ppeTypes: {
      name: 'ppeTypes??',
      label: 'PPE??',
      menu: 'PPE??',
      exporterFileName: 'ppeTypes_export??',
      list: {
        menu: 'PPE??',
        title: 'PPE??',
      },
      create: {
        success: 'PPE Type saved successfully??',
      },
      update: {
        success: 'PPE Type saved successfully??',
      },
      destroy: {
        success: 'PPE Type deleted successfully??',
        destroyAll: {
          success: 'PPE Type(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit PPE Type??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New PPE Type??',
      },
      view: {
        title: 'View PPE Type??',
      },
    },
    lotoLockOutHazards: {
      name: 'lotoLockOutHazards??',
      label: 'LOTO Lock Out Hazards??',
      menu: 'LOTO Lock Out Hazards??',
      exporterFileName: 'lotoLockOutHazards_export??',
      list: {
        menu: 'LOTO Lock Out Hazards??',
        title: 'LOTO Lock Out Hazards??',
      },
      create: {
        success: 'LOTO Lock Out Hazard saved successfully??',
      },
      update: {
        success: 'LOTO Lock Out Hazard saved successfully??',
      },
      destroy: {
        success: 'LOTO Lock Out Hazard deleted successfully??',
        destroyAll: {
          success: 'LOTO Lock Out Hazard(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit LOTO Lock Out Hazard??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        description: 'Description??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New LOTO Lock Out Hazard??',
      },
      view: {
        title: 'View LOTO Lock Out Hazard??',
      },
    },
    lotoLockOutDevices: {
      name: 'lotoLockOutDevices??',
      label: 'LOTO Lock Out Devices??',
      menu: 'LOTO Lock Out Devices??',
      exporterFileName: 'lotoLockOutDevices_export??',
      list: {
        menu: 'LOTO Lock Out Devices??',
        title: 'LOTO Lock Out Devices??',
      },
      create: {
        success: 'LOTO Lock Out Device saved successfully??',
      },
      update: {
        success: 'LOTO Lock Out Device saved successfully??',
      },
      destroy: {
        success: 'LOTO Lock Out Device deleted successfully??',
        destroyAll: {
          success: 'LOTO Lock Out Device(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit LOTO Lock Out Device??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        description: 'Description??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New LOTO Lock Out Device??',
      },
      view: {
        title: 'View LOTO Lock Out Device??',
      },
    },
    lotoPrintProcedure: {
      name: 'lotoPrintProcedure??',
      label: 'LOTO Print Procedure??',
      menu: 'Print Procedure??',
      view: {
        title: 'View LOTO Procedure??',
      },
      fields: {
        id: 'Id??',
        assetId: 'Asset??',
        orgId: 'Organization??',
        orgPlantId: 'Plant??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      viewLabel: {
        header: 'Lockout/Tagout Procedure??'
      }
    },
    lotoLockOutMethods: {
      name: 'lotoLockOutMethods??',
      label: 'LOTO Lock Out Methods??',
      menu: 'LOTO Lock Out Methods??',
      exporterFileName: 'lotoLockOutMethods_export??',
      list: {
        menu: 'LOTO Lock Out Methods??',
        title: 'LOTO Lock Out Methods??',
      },
      create: {
        success: 'LOTO Lock Out Method saved successfully??',
      },
      update: {
        success: 'LOTO Lock Out Method saved successfully??',
      },
      destroy: {
        success: 'LOTO Lock Out Method deleted successfully??',
        destroyAll: {
          success: 'LOTO Lock Out Method(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit LOTO Lock Out Method??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        description: 'Description??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New LOTO Lock Out Method??',
      },
      view: {
        title: 'View LOTO Lock Out Method??',
      },
    },
    assetCategories: {
      name: 'assetCategories??',
      label: 'Asset Categories??',
      menu: 'Asset Categories??',
      exporterFileName: 'assetCategories_export??',
      list: {
        menu: 'Asset Categories??',
        title: 'Asset Categories??',
      },
      create: {
        success: 'Asset Category saved successfully??',
      },
      update: {
        success: 'Asset Category saved successfully??',
      },
      destroy: {
        success: 'Asset Category deleted successfully??',
        destroyAll: {
          success: 'Asset Category(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Asset Category??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Asset Category??',
      },
      view: {
        title: 'View Asset Category??',
      },
    },
    assetTypes: {
      name: 'assetTypes??',
      label: 'Asset Types??',
      menu: 'Asset Types??',
      exporterFileName: 'assetTypes_export??',
      list: {
        menu: 'Asset Types??',
        title: 'Asset Types??',
      },
      create: {
        success: 'Asset Type saved successfully??',
      },
      update: {
        success: 'Asset Type saved successfully??',
      },
      destroy: {
        success: 'Asset Type deleted successfully??',
        destroyAll: {
          success: 'Asset Type(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Asset Type??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        assetCategory: 'Asset Category??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Asset Type??',
      },
      view: {
        title: 'View Asset Type??',
      },
    },
    energySourceLocations: {
      name: 'energySourceLocations??',
      label: 'Energy Source Locations??',
      menu: 'Energy Source Locations??',
      exporterFileName: 'energySourceLocations_export??',
      list: {
        menu: 'Energy Source Locations??',
        title: 'Energy Source Locations??',
      },
      create: {
        success: 'Energy Source Location saved successfully??',
      },
      update: {
        success: 'Energy Source Location saved successfully??',
      },
      destroy: {
        success: 'Energy Source Location deleted successfully??',
        destroyAll: {
          success: 'Energy Source Location(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Energy Source Location??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Energy Source Location??',
      },
      view: {
        title: 'View Energy Source Location??',
      },
    },
    energySourceDescriptions: {
      name: 'energySourceDescriptions??',
      label: 'Energy Source Descriptions??',
      menu: 'Energy Source Descriptions??',
      exporterFileName: 'energySourceDescriptions_export??',
      list: {
        menu: 'Energy Source Descriptions??',
        title: 'Energy Source Descriptions??',
      },
      create: {
        success: 'Energy Source Description saved successfully??',
      },
      update: {
        success: 'Energy Source Description saved successfully??',
      },
      destroy: {
        success: 'Energy Source Description deleted successfully??',
        destroyAll: {
          success: 'Energy Source Description(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Energy Source Description??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        energyType: 'Energy Source??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      new: {
        title: 'New Energy Source Description??',
      },
      view: {
        title: 'View Energy Source Description??',
      },
    },
    energyTypes: {
      name: 'energyTypes??',
      label: 'Energy Sources??',
      menu: 'Energy Sources??',
      exporterFileName: 'energyTypes_export??',
      list: {
        menu: 'Energy Sources??',
        title: 'Energy Sources??',
      },
      create: {
        success: 'Energy Source saved successfully??',
      },
      update: {
        success: 'Energy Source saved successfully??',
      },
      destroy: {
        success: 'Energy Source deleted successfully??',
        destroyAll: {
          success: 'Energy Source(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Energy Source??',
      },
      fields: {
        id: 'Id??',
        name: 'Name??',
        code: 'Short Name??',
        icon: 'Icon??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
        createdAtRange: 'Created at??',
      },
      new: {
        title: 'New Energy Source??',
      },
      view: {
        title: 'View Energy Source??',
      },
    },
    energyHierarchy: {
      name: 'energyHierarchy??',
      label: 'Energy Hierarchy??',
      menu: 'Energy Hierarchies??',
      exporterFileName: 'energyHierarchy_export??',
      hierarchy: 'Hierarchy??',
      list: {
        menu: 'Energy Hierarchies??',
        title: 'Energy Hierarchies??',
      },
      create: {
        success: 'Energy Hierarchy saved successfully??',
      },
      update: {
        success: 'Energy Hierarchy saved successfully??',
      },
      destroy: {
        success: 'Energy Hierarchy deleted successfully??',
        destroyAll: {
          success: 'Energy Hierarchy(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Energy Hierarchy??',
      },
      fields: {
        id: 'Id??',
        orgId: 'Organization??',
        orgPlantId: 'Plant??',
        name: 'Name??',
        energyType: 'Energy Source??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
        color: 'Color??',
        showMoreOptions: 'Show More Options??'
      },
      new: {
        title: 'New Energy Hierarchy??',
      },
      view: {
        title: 'View Energy Hierarchy??',
      },
      flowchart: {
        addChild: 'Add Child??',
        replace: 'Replace Asset??',
        lotoSettings: 'LOTO Settings??'
      },
      removeConfirmationMessage: "On clicking Yes, selected asset's child asset(s) will be assigned to its parent asset.??"
    },
    arcFlashProductTypes: {
      name: 'arcFlashDeviceTypes??',
      label: 'आर्कफ्लैश युक्ति प्रकार',
      menu: 'आर्कफ्लैश युक्ति प्रकार',
      exporterFileName: 'arcFlashDeviceTypes_export',
      list: {
        menu: 'आर्कफ्लैश युक्ति प्रकार',
        title: 'आर्कफ्लैश युक्ति प्रकार',
      },
      create: {
        success: 'ArcFlash युक्ति प्रकार सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'ArcFlash युक्ति प्रकार सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'ArcFlash युक्ति प्रकार सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'ArcFlash युक्ति प्रकार (ओं) को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'ArcFlash युक्ति प्रकार संपादित करें',
      },
      fields: {
        id: 'ईद',
        name: 'नाम',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नई ArcFlash युक्ति प्रकार',
      },
      view: {
        title: 'देखें ArcFlash युक्ति प्रकार',
      },
      importer: {
        title: 'आयात आर्कफ्लैश युक्ति प्रकार',
        fileName: 'arcFlashDeviceTypes_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    notificationGroups: {
      name: 'notificationGroups',
      label: 'अधिसूचना समूह',
      menu: 'अधिसूचना समूह',
      exporterFileName: 'notificationGroups_export??',
      list: {
        menu: 'अधिसूचना समूह',
        title: 'अधिसूचना समूह',
      },
      create: {
        success: 'अधिसूचना समूह सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'अधिसूचना समूह सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'अधिसूचना समूह सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'अधिसूचना समूह सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'अधिसूचना समूह संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        name: 'नाम',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नई अधिसूचना समूह',
      },
      view: {
        title: 'अधिसूचना समूह देखें',
      },
      importer: {
        title: 'आयात अधिसूचना समूह',
        fileName: 'notificationGroups_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    messagingGroups: {
      name: 'messagingGroups',
      label: 'मैसेजिंग ग्रुप',
      menu: 'मैसेजिंग ग्रुप',
      exporterFileName: 'messagingGroups_export??',
      list: {
        menu: 'मैसेजिंग ग्रुप',
        title: 'मैसेजिंग ग्रुप',
      },
      create: {
        success: 'मैसेजिंग ग्रुप सफलतापूर्वक बच गया',
      },
      update: {
        success: 'मैसेजिंग ग्रुप सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'मैसेजिंग समूह सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'संदेश सेवा समूह सफलतापूर्वक हटाया गया',
        },
      },
      edit: {
        title: 'संदेश समूह संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        name: 'नाम',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        public: 'जनता',
        persistent: 'स्थायी',
      },
      new: {
        title: 'न्यू मैसेजिंग ग्रुप',
      },
      view: {
        title: 'संदेश समूह देखें',
      },
      importer: {
        title: 'आयात संदेश समूह',
        fileName: 'messagingGroups_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    messagingGroupMembers: {
      name: 'messagingGroupMembers??',
      label: 'संदेश समूह के सदस्य',
      menu: 'संदेश समूह के सदस्य',
      exporterFileName: 'messagingGroupMembers_export??',
      list: {
        menu: 'संदेश समूह के सदस्य',
        title: 'संदेश समूह के सदस्य',
      },
      create: {
        success: 'मैसेजिंग ग्रुप मेंबर ने सफलतापूर्वक सेव किया',
      },
      update: {
        success: 'मैसेजिंग ग्रुप मेंबर ने सफलतापूर्वक सेव किया',
      },
      destroy: {
        success: 'संदेश समूह सदस्य को सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'संदेश समूह सदस्य (सदस्य) सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'संदेश समूह सदस्य को संपादित करें',
      },
      fields: {
        id: 'ईद',
        groupId: 'मैसेजिंग ग्रुप आईडी',
        userId: 'उपयोगकर्ता',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
      },
      new: {
        title: 'नए संदेश समूह के सदस्य',
      },
      view: {
        title: 'संदेश समूह के सदस्य देखें',
      },
      importer: {
        title: 'आयात संदेश समूह के सदस्य',
        fileName: 'messagingGroupMembers_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    chat: {
      name: 'बातचीत',
      label: 'चैट',
      menu: 'चैट',
      title: 'चैट',
      permanent: 'स्थायी',
      public: 'जनता',
      editname: 'संपादित करें',
      exitGroup: 'समूह से बाहर निकलें',
      exporterFileName: 'chat_export',
      list: {
        menu: 'चैट',
        title: 'चैट',
      },
      create: {
        success: 'चैट सफलतापूर्वक सहेजी गई',
      },
      update: {
        success: 'चैट सफलतापूर्वक सहेजी गई',
      },
      destroy: {
        success: 'चैट सफलतापूर्वक हटा दी गई',
        destroyAll: {
          success: 'चैट सफलतापूर्वक नष्ट हो गई',
        },
      },
      edit: {
        title: 'चैट संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        orgSectionId: 'अनुभाग',
        orgAreaId: 'क्षेत्र',
        orgSubAreaId: 'उप क्षेत्र',
        groupId: 'समूह आईडी',
        groupName: 'समूह का नाम',
        userId: 'यूज़र आईडी',
        message: 'संदेश',
        files: 'फ़ाइल',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        selectGroup: 'कृपया समूह का चयन करें',
        typeAMessage: 'एक संदेश लिखें',
        searchForAChatGroup: 'चैट समूह के लिए खोजें',
        newChatGroup: 'नया चैट समूह',
        enterNewChatGroupName: 'कृपया चैट समूह का नाम दर्ज करें।',
        chatGroupName: 'चैट समूह का नाम:',
        persistent: 'दृढ़',
        editChatGroup: 'चैट समूह संपादित करें',
        groupImage: 'समूह अवतार',
        create: 'सृजन करना',
        confirm: 'पुष्टि करें',
        apply: 'लागू',
        sortBy: 'इसके अनुसार क्रमबद्ध करें',
        startDate: 'आरंभ करने की तिथि',
        endDate: 'अंतिम तिथि',
        dateAscending: 'आरोही तिथि',
        dateDescending: 'उतरने की तिथि',
        searchText: 'पाठ खोजें',
        inviteMembers: 'सदस्यों को आमंत्रित करो',
        inviteorRemoveMembers: 'सदस्यों को आमंत्रित या निकालें',
        joinThisGroupToSendMessage: 'संदेश भेजने के लिए इस समूह में शामिल हों',
      },
      new: {
        title: 'नई चैट',
      },
      view: {
        title: 'चैट देखें',
      },
      importer: {
        title: 'आयात चैट',
        fileName: 'chat_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    employee: {
      name: 'कर्मचारी',
      label: 'कर्मचारियों',
      menu: 'कर्मचारियों',
      exporterFileName: 'employee_export??',
      list: {
        menu: 'कर्मचारियों',
        title: 'कर्मचारियों',
      },
      create: {
        success: 'कर्मचारी सफलतापूर्वक बच गया',
      },
      update: {
        success: 'कर्मचारी सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'कर्मचारी सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'कर्मचारी को सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'कर्मचारी को संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        firstName: 'पहला नाम',
        lastName: 'उपनाम',
        directManager: 'प्रत्यक्ष प्रबंधक',
        assetType: 'संपदा प्रकार',
        employeeType: 'कर्मचारी का प्रकार',
        employeeNumber: 'कर्मचारी संख्या',
        title: 'शीर्षक',
        mainWorkArea: 'मुख्य कार्य क्षेत्र',
        email: 'ईमेल',
        state: 'राज्य',
        action: 'कार्य',
        avatar: 'अवतार',
        lastContactRange: 'अंतिम संपर्क सीमा',
        lastContact: 'अंतिम संपर्क',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        password: "Password??",
        phoneNumber: 'Phone Number??',
        createUser: 'फ़ोन नंबर',
        countryCode: 'देश कोड',
        roles: 'भूमिकाएँ',
        deviceType: 'उपकरण का प्रकार',
        deviceTypeDesc: 'उपकरण प्रकार विवरण',
      },
      enumerators: {
        assetType: {
          Person: 'व्यक्ति',
        },
        employeeType: {
          Employee: 'कर्मचारी',
          Contractor: 'ठेकेदार',
          Visitor: 'आगंतुक',
        },
      },
      new: {
        title: 'नए कर्मचारी',
      },
      view: {
        title: 'कर्मचारी को देखें',
      },
      importer: {
        title: 'आयात कर्मचारी',
        fileName: 'employee_import_template??',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    beacon: {
      name: 'प्रकाश',
      label: 'बीकन',
      menu: 'बीकन',
      exporterFileName: 'beacon_export??',
      list: {
        menu: 'बीकन',
        title: 'बीकन',
      },
      create: {
        success: 'बीकन सफलतापूर्वक बच गया',
      },
      update: {
        success: 'बीकन सफलतापूर्वक बच गया',
      },
      destroy: {
        success: 'बीकन सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'बीकन सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'बीकन संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        employeeId: 'कर्मचारी',
        assetId: 'एसेट',
        uUIDMinorRange: 'UUIDMinor??',
        uUIDMinor: 'UUIDMinor??',
        deviceTypeRange: 'उपकरण प्रकार रेंज',
        deviceType: 'उपकरण का प्रकार',
        deviceTypeName: 'उपकरण प्रकार नाम',
        deviceTypeDesc: 'उपकरण प्रकार विवरण',
        isProximityAlert: 'IsProximityAlert??',
        minProximityMRange: 'MinProximityM??',
        minProximityM: 'MinProximityM??',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        createdAtRange: 'पर बनाया गया',
        assigneeType: 'असाइन का प्रकार',
        employeeType: 'कर्मचारी का प्रकार',
        employeeNumber: 'कर्मचारी #',
        isRegistered: "पंजीकृत है",
        isAssigned: "सौंपा गया है?",
        serialNum: "धारावाहिक #",
        trackingCode: "ट्रैकिंग कोड",
        purchaseDate: "खरीद की तारीख",
        measuredPower: 'मापी हुई शक्ति',
        measuredPowerHint: 'यदि इनपुट नहीं दिया गया है तो डिफ़ॉल्ट मान सेट किया जाएगा।',
        softwareUpdateStatus: 'Software Update Status??',
        sourceMac: 'Source Mac??',
        firmwareVersion: 'Firmware Version??',
        softwareVersion: 'Software Version??',
        settings: 'Settings??'
      },
      updateAvailable: 'Update available??',
      upToDate: 'Up to date??',
      new: {
        title: 'New Beacon',
      },
      view: {
        title: 'View Beacon',
      },
      importer: {
        title: 'बीकन आयात करें',
        fileName: 'beacon_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    beaconUnprovisioned: {
      name: 'beaconUnprovisioned??',
      label: 'Beacons Unprovisioned??',
      menu: 'Beacons Unprovisioned??',
      exporterFileName: 'beaconUnprovisioned_export??',
      list: {
        menu: 'Beacons Unprovisioned??',
        title: 'Beacons Unprovisioned??',
      },
      create: {
        success: 'Beacon Unprovisioned saved successfully??',
      },
      update: {
        success: 'Beacon Unprovisioned saved successfully??',
      },
      destroy: {
        success: 'Beacon Unprovisioned deleted successfully??',
        destroyAll: {
          success: 'Beacon Unprovisioned(s) deleted successfully??',
        },
      },
      edit: {
        title: 'Edit Beacon Unprovisioned??',
      },
      fields: {
        id: 'Id??',
        orgId: 'Organization??',
        orgPlantId: 'Plant??',
        employeeId: 'Employee??',
        sourceMac: 'Source Mac??',
        ipaddress: 'Ip Address??',
        isBeaconNotAssigned: 'No Beacon Assigned??',
        softwareVersion: 'Software Version??',
        lastHeartbeat: 'Last Connected??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',
      },
      updateAvailable: 'Update available??',
      upToDate: 'Up to date??',
      new: {
        title: 'New Beacon Unprovisioned??',
      },
      view: {
        title: 'View Beacon Unprovisioned??',
      },
      importer: {
        title: 'Import Beacons Unprovisioned??',
        fileName: 'beaconUnprovisioned_import_template??',
        hint: 'Files/Images columns must be the URLs of the files separated by space.??',
      },
    },
    firmware: {
      name: 'फर्मवेयर',
      label: 'फर्मवेयर',
      menu: 'फर्मवेयर',
      exporterFileName: 'firmware_export??',
      list: {
        menu: 'फर्मवेयर',
        title: 'फर्मवेयर',
      },
      create: {
        success: 'फर्मवेयर सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'फर्मवेयर सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'फर्मवेयर सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'फ़र्मवेयर सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'एडिट फ़र्मवेयर',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        deviceTypeRange: 'उपकरण प्रकार रेंज',
        deviceType: 'उपकरण का प्रकार',
        deviceTypeName: 'उपकरण प्रकार नाम',
        deviceTypeDesc: 'उपकरण प्रकार विवरण',
        createdAt: 'पर बनाया गया',
        updatedAt: 'पर अपडेट किया गया',
        dateReleased: 'जारी की गई तारीख',
        firmwareVersion: 'प्रक्रिया यंत्र सामग्री संस्करण',
        softwareVersion: 'सॉफ्टवेयर संस्करण',
        environmentVersion: 'पर्यावरण संस्करण',
        firmwareZip: 'फर्मवेयर फ़ाइलनाम ज़िप',
        softwareZip: 'सॉफ्टवेयर फ़ाइल नाम ज़िप',
        environmentScriptZip: 'पर्यावरण लिपि ज़िप',
        orgDetails: 'संगठन विवरण',
      },
      new: {
        title: 'नई फर्मवेयर',
      },
      view: {
        title: 'फर्मवेयर देखें',
      },
      importer: {
        title: 'आयात फर्मवेयर',
        fileName: 'firmware_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    masterEmailTemplate: {
      name: 'मास्टर ईमेल टेम्पलेट',
      label: 'मास्टर ईमेल टेम्पलेट',
      menu: 'मास्टर ईमेल टेम्पलेट',
      exporterFileName: 'masterEmailTemplate_export',
      list: {
        menu: 'मास्टर ईमेल टेम्पलेट',
        title: 'मास्टर ईमेल टेम्पलेट',
      },
      create: {
        success: 'मास्टर ईमेल टेम्प्लेट सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'मास्टर ईमेल टेम्प्लेट सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'मास्टर ईमेल टेम्प्लेट सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'मास्टर ईमेल टेम्प्लेट सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'मास्टर ईमेल टेम्पलेट संपादित करें',
      },
      new: {
        title: 'नया मास्टर ईमेल टेम्पलेट',
      },
      view: {
        title: 'मास्टर ईमेल टेम्पलेट देखें',
      },
      enumerators: {
        templateType: {
          TemperatureTaken: 'तापमान लिया',
          FailedAssessment: 'असफल मूल्यांकन',
          CloseContact: 'नज़दीकी संपर्क',
          HighConcentrationArea: 'उच्च एकाग्रता क्षेत्र',
          LotoLock: 'LOTO Lock??',
          LotoUnlock: 'LOTO Unlock??',
          ArcFlashAuditDue: 'Arc Flash Audit Due??'
        },
      },
    },
    emailTemplate: {
      name: 'ईमेल टेम्पलेट',
      label: 'ईमेल टेम्पलेट',
      menu: 'ईमेल टेम्पलेट',
      exporterFileName: 'emailTemplate_export',
      list: {
        menu: 'ईमेल टेम्पलेट',
        title: 'ईमेल टेम्पलेट',
      },
      create: {
        success: 'ईमेल टेम्प्लेट सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'ईमेल टेम्प्लेट सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'ईमेल टेम्प्लेट सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'ईमेल टेम्प्लेट सफलतापूर्वक हटाए गए',
        },
      },
      edit: {
        title: 'ईमेल टेम्पलेट संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        name: 'नाम',
        subject: 'विषय',
        body: 'तन',
        isEnabled: 'स्थिति',
        templateType: 'साँचा प्रकार',
        subjectLang: 'विषय({0})',
        bodyLang: 'तन({0})',
      },
      new: {
        title: 'नया ईमेल टेम्पलेट',
      },
      view: {
        title: 'ईमेल टेम्पलेट देखें',
      },
      disabled: 'विकलांग',
      enabled: 'सक्रिय',
      doDisableAllSuccess: 'टेम्प्लेट (ओं) को सफलतापूर्वक अक्षम कर दिया गया',
      doEnableAllSuccess: 'टेम्प्लेट सफलतापूर्वक सक्षम हो गए हैं',
    },
    travelHistory: {
      name: 'यात्रा',
      label: 'यात्रा',
      menu: 'यात्रा',
      exporterFileName: 'travelHistory_export',
      list: {
        menu: 'यात्रा',
        title: 'यात्रा',
      },
      create: {
        success: 'यात्रा सफलतापूर्वक बच गई',
      },
      update: {
        success: 'यात्रा सफलतापूर्वक बच गई',
      },
      destroy: {
        success: 'यात्रा सफलतापूर्वक हटा दी गई',
        destroyAll: {
          success: 'यात्रा सफलतापूर्वक निकाली गई',
        },
      },
      edit: {
        title: 'यात्रा संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        employeeId: 'कर्मचारी',
        travelType: 'यात्रा का प्रकार',
        destination: 'गंतव्य',
        startTime: 'समय शुरू',
        endTime: 'अंतिम समय',
        createdAtRange: 'दिनांक',
        duration: 'अवधि',
        purpose: 'उद्देश्य',
      },
      enumerators: {
        travelType: {
          international: 'अंतरराष्ट्रीय',
          local: 'स्थानीय',
        },
      },
      new: {
        title: 'नई यात्रा',
      },
      view: {
        title: 'यात्रा देखें',
      },
      importer: {
        title: 'आयात यात्रा',
        fileName: 'travel_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    testingHistory: {
      name: 'टेस्ट',
      label: 'टेस्ट',
      menu: 'टेस्ट',
      exporterFileName: 'testHistory_export',
      list: {
        menu: 'टेस्ट',
        title: 'टेस्ट',
      },
      create: {
        success: 'परीक्षण सफलतापूर्वक सहेजा गया',
      },
      update: {
        success: 'परीक्षण सफलतापूर्वक सहेजा गया',
      },
      destroy: {
        success: 'परीक्षण सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'परीक्षण सफलतापूर्वक हटा दिया गया',
        },
      },
      edit: {
        title: 'परीक्षण संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        employeeId: 'कर्मचारी',
        testType: 'टेस्ट का प्रकार',
        method: 'तरीका',
        reason: 'कारण',
        result: 'परिणाम',
        testDate: 'टेस्ट की तारीख और समय'
      },
      enumerators: {
        testType: {
          express: 'एक्सप्रेस टेस्ट',
          lab: 'लैब टेस्ट',
        },
        method: {
          swab: 'पट्टी',
          blood: 'रक्त',
          urine: 'मूत्र',
        },
        result: {
          pending: 'विचाराधीन',
          positive: 'सकारात्मक',
          negative: 'नकारात्मक',
        },
      },
      new: {
        title: 'नया टेस्ट',
      },
      view: {
        title: 'देखें टेस्ट',
      },
      importer: {
        title: 'आयात परीक्षण',
        fileName: 'test_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    vaccineHistory: {
      name: 'टीका',
      label: 'टीका',
      menu: 'टीका',
      exporterFileName: 'vaccineHistory_export',
      list: {
        menu: 'टीका',
        title: 'टीका',
      },
      create: {
        success: 'वैक्सीन सफलतापूर्वक बच गई',
      },
      update: {
        success: 'वैक्सीन सफलतापूर्वक बच गई',
      },
      destroy: {
        success: 'टीका सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'टीके सफलतापूर्वक हटा दिए गए',
        },
      },
      edit: {
        title: 'वैक्सीन संपादित करें',
      },
      fields: {
        id: 'ईद',
        orgId: 'संगठन',
        orgPlantId: 'कारख़ाना',
        employeeId: 'कर्मचारी',
        vaccineType: 'वैक्सीन के प्रकार',
        dateReceived: 'प्राप्ति दिनांक',
        immunityDuration: 'प्रतिरक्षा की अपेक्षित अवधि',
        expiryDate: 'समाप्ति तिथि',
      },
      enumerators: {
        VaccineType: {
          express: 'एक्सप्रेस वैक्सीन',
          lab: 'लैब वैक्सीन',
        },
        method: {
          swab: 'पट्टी',
          blood: 'रक्त',
          urine: 'मूत्र',
        },
        result: {
          pending: 'विचाराधीन',
          positive: 'सकारात्मक',
          negative: 'नकारात्मक',
        },
      },
      new: {
        title: 'नया टीका',
      },
      view: {
        title: 'वैक्सीन देखें',
      },
      importer: {
        title: 'आयात टीका',
        fileName: 'Vaccine_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए।',
      },
    },
    auth: {
      profile: {
        title: 'प्रोफ़ाइल संपादित करें',
        success: 'प्रोफाइल को सफलतापूर्वक अपडेट किया गया',
        verifyCodeSuccess: 'कोड सफलतापूर्वक सत्यापित किया गया',
        resendCodeSuccess: 'कोड फिर से सफलतापूर्वक भेजा गया',
        verifyCodeError: 'कोड सत्यापित करते समय कुछ त्रुटि हुई',
        resendCodeError: 'कोड पुन: भेजने के दौरान कुछ त्रुटि हुई',
        tokenInvalid: 'टोकन अमान्य है',
        validationFailed: 'प्रमाणीकरण विफल रहा',
      },
      createAnAccount: 'खाता बनाएं',
      rememberMe: 'मुझे याद रखना',
      forgotPassword: 'पासवर्ड भूल गए',
      signin: 'साइन इन करें',
      signup: 'साइन अप करें',
      signout: 'प्रस्थान करें',
      verifyCode: 'कोड सत्यापित करें',
      resendCode: 'पुन: कोड भेजे',
      alreadyHaveAnAccount: 'पहले से ही एक खाता है? साइन इन करें।',
      signinWithAnotherAccount: 'किसी अन्य खाते से साइन इन करें',
      emailUnverified: {
        message: 'जारी रखने के लिए कृपया अपने ईमेल की पुष्टि करें <strong> {0} </ strong>।',
        submit: 'ईमेल सत्यापन पुनः भेजें',
      },
      emptyPermissions: {
        message: 'आपके पास अभी तक कोई अनुमति नहीं है। आपको विशेषाधिकार देने के लिए व्यवस्थापक की प्रतीक्षा करें।',
      },
      passwordResetEmail: {
        message: 'पासवर्ड रीसेट ईमेल भेजें',
        error: 'ईमेल मान्यता प्राप्त नहीं है',
      },
      passwordReset: {
        message: 'पासवर्ड रीसेट',
      },
      emailAddressVerificationEmail: {
        error: 'ईमेल मान्यता प्राप्त नहीं है',
      },
      verificationEmailSuccess: 'सत्यापन ईमेल सफलतापूर्वक भेजा गया',
      passwordResetEmailSuccess: 'पासवर्ड रीसेट ईमेल सफलतापूर्वक भेजा गया',
      passwordResetSuccess: 'पासवर्ड सफलतापूर्वक बदला गया',
      verifyEmail: {
        success: 'ईमेल सफलतापूर्वक सत्यापित की गई',
        message: 'बस एक पल, आपके ईमेल को सत्यापित किया जा रहा है ...',
      },
    },
    roles: {
      owner: {
        label: 'मालिक',
        description: 'सभी संसाधनों तक पूर्ण पहुंच',
      },
      orgAdmin: {
        label: 'संगठन व्यवस्थापक',
        description: 'केवल org स्तर के डैशबोर्ड और रिपोर्ट, उपयोगकर्ता प्रबंधन पृष्ठ देखें',
      },
      plantAdmin: {
        label: 'प्लांट एडमिन',
        description: 'उपयोगकर्ता के लॉग इन प्लांट के मिलान वाले सभी पृष्ठ देखें',
      },
      user: {
        label: 'उपयोगकर्ता',
        description: 'वेब तक कोई पहुंच नहीं है, केवल मोबाइल फोन ऐप तक पहुंच है',
      },
      security: {
        label: 'सुरक्षा',
        description: 'सुरक्षा गेट, कर्मचारी इतिहास, उपकरण प्रावधान, इंडोर / आउटडोर स्थान और डैशबोर्ड पृष्ठ देखें',
      },
      nurse: {
        label: 'नर्स',
        description: 'नर्स स्टेशन, कर्मचारी इतिहास और डैशबोर्ड पृष्ठ देखें',
      },
      manager: {
        label: 'मैनेजर',
        description: 'प्रबंधक का दृश्य, कर्मचारी इतिहास, इंडोर / आउटडोर स्थान, डैशबोर्ड और रिपोर्ट पृष्ठ देखें',
      },
      editor: {
        label: 'संपादक',
        description: 'सभी संसाधनों तक पहुंच संपादित करें',
      },
      viewer: {
        label: 'दर्शक',
        description: 'सभी संसाधनों तक पहुंच देखें',
      },
      auditLogViewer: {
        label: 'ऑडिट लॉग व्यूअर',
        description: 'ऑडिट लॉग देखने के लिए प्रवेश',
      },
      iamSecurityReviewer: {
        label: 'सुरक्षा समीक्षक',
        description: 'उपयोगकर्ताओं की भूमिकाओं के प्रबंधन के लिए पूर्ण पहुँच',
      },
      entityEditor: {
        label: 'इकाई संपादक',
        description: 'सभी संस्थाओं तक पहुंच संपादित करें',
      },
      entityViewer: {
        label: 'इकाई दर्शक',
        description: 'सभी संस्थाओं तक पहुंच देखें',
      },
      organizationsEditor: {
        label: 'संगठन संपादक',
        description: 'संगठनों तक पहुंच संपादित करें',
      },
      organizationsViewer: {
        label: 'संगठन दर्शक',
        description: 'संगठनों तक पहुंच देखें',
      },
      orgPlantsEditor: {
        label: 'Org Plants संपादक',
        description: 'Org Plants तक पहुंच संपादित करें',
      },
      orgPlantsViewer: {
        label: 'ऑर्गेप्लांट्स व्यूअर',
        description: 'Org Plants तक पहुंच देखें',
      },
      orgSectionsEditor: {
        label: 'संगठन अनुभाग संपादक',
        description: 'OrgSections तक पहुंच संपादित करें',
      },
      orgSectionsViewer: {
        label: 'संगठन अनुभाग दर्शक',
        description: 'OrgSections तक पहुंच देखें',
      },
      orgAreasEditor: {
        label: 'क्षेत्र संपादक',
        description: 'क्षेत्रों तक पहुंच संपादित करें',
      },
      orgAreasViewer: {
        label: 'क्षेत्र का दर्शक',
        description: 'क्षेत्रों तक पहुंच देखें',
      },
      orgSubAreasEditor: {
        label: 'उप क्षेत्र संपादक',
        description: 'उप क्षेत्रों में पहुंच संपादित करें',
      },
      orgSubAreasViewer: {
        label: 'उप क्षेत्र दर्शक',
        description: 'उप क्षेत्रों तक पहुंच देखें',
      },
      documentEditor: {
        label: 'दस्तावेज़ संपादक',
        description: 'दस्तावेज़ों तक पहुंच संपादित करें',
      },
      documentViewer: {
        label: 'दस्तावेज़ देखने वाला',
        description: 'दस्तावेज़ों तक पहुंच देखें',
      },
      assetEditor: {
        label: 'एसेट एडिटर',
        description: 'एसेट्स तक पहुंच संपादित करें',
      },
      assetViewer: {
        label: 'एसेट व्यूअर',
        description: 'एसेट्स तक पहुंच देखें',
      },
      pandemicAssessmentEditor: {
        label: 'महामारी मूल्यांकन संपादक',
        description: 'महामारी मूल्यांकन तक पहुंच संपादित करें',
      },
      pandemicAssessmentViewer: {
        label: 'महामारी आकलन दर्शक',
        description: 'महामारी आकलन तक पहुंच देखें',
      },
      pandemicTemperatureEditor: {
        label: 'महामारी तापमान संपादक',
        description: 'महामारी तापमान तक पहुंच संपादित करें',
      },
      pandemicTemperatureViewer: {
        label: 'महामारी तापमान दर्शक',
        description: 'महामारी तापमान तक पहुँच देखें',
      },
      pandemicCountryEditor: {
        label: 'महामारी देश संपादक',
        description: 'महामारी देशों तक पहुंच संपादित करें',
      },
      pandemicCountryViewer: {
        label: 'महामारी देश दर्शक',
        description: 'महामारी देशों तक पहुंच देखें',
      },
      pandemicCountryStatsEditor: {
        label: 'महामारी देश के आँकड़े संपादक',
        description: 'महामारी देश के आँकड़े तक पहुँच संपादित करें',
      },
      pandemicCountryStatsViewer: {
        label: 'महामारी देश के आँकड़े दर्शक',
        description: 'महामारी देश के आँकड़े तक पहुँच देखें',
      },
      locationsEditor: {
        label: 'स्थान संपादक',
        description: 'स्थान तक पहुंच संपादित करें',
      },
      locationsViewer: {
        label: 'स्थान दर्शक',
        description: 'स्थानों तक पहुंच देखें',
      },
      arcFlashAssetsEditor: {
        label: 'आर्कफलाश एसेट एडिटर',
        description: 'ArcFlash एसेट तक पहुंच संपादित करें',
      },
      arcFlashAssetsViewer: {
        label: 'आर्कफलाश एसेट व्यूअर',
        description: 'ArcFlash एसेट का उपयोग देखें',
      },
      arcFlashProductTypesEditor: {
        label: 'ArcFlash उत्पाद प्रकार संपादक',
        description: 'आर्कफ्लैश उत्पाद प्रकारों तक पहुंच संपादित करें',
      },
      arcFlashProductTypesViewer: {
        label: 'आर्कफ्लैश उत्पाद प्रकार दर्शक',
        description: 'आर्कफ्लैश उत्पाद प्रकारों तक पहुंच देखें',
      },
      notificationGroupsEditor: {
        label: 'अधिसूचना समूह संपादक',
        description: 'अधिसूचना समूहों तक पहुंच संपादित करें',
      },
      notificationGroupsViewer: {
        label: 'अधिसूचना समूह दर्शक',
        description: 'अधिसूचना समूहों तक पहुंच देखें',
      },
      messagingGroupsEditor: {
        label: 'संदेश समूह संपादक',
        description: 'संदेश समूह तक पहुँच संपादित करें',
      },
      messagingGroupsViewer: {
        label: 'मैसेजिंग ग्रुप व्यूअर',
        description: 'संदेश समूह तक पहुंच देखें',
      },
      messagingGroupMembersEditor: {
        label: 'संदेश समूह सदस्य संपादक',
        description: 'संदेश समूह सदस्यों तक पहुँच संपादित करें',
      },
      messagingGroupMembersViewer: {
        label: 'मैसेजिंग ग्रुप मेंबर व्यूअर',
        description: 'संदेश समूह सदस्यों के लिए पहुँच देखें',
      },
      chatEditor: {
        label: 'चैट संपादक',
        description: 'चैट तक पहुंच संपादित करें',
      },
      chatViewer: {
        label: 'चैट दर्शक',
        description: 'चैट तक पहुंच देखें',
      },
      beaconEditor: {
        label: 'बीकन्स एडिटर',
        description: 'बीकन तक पहुंच संपादित करें',
      },
      beaconViewer: {
        label: 'बीकन दर्शक',
        description: 'बीकन तक पहुंच देखें',
      },
      employeeEditor: {
        label: 'कर्मचारी संपादक',
        description: 'कर्मचारियों तक पहुंच संपादित करें',
      },
      employeeViewer: {
        label: 'कर्मचारी दर्शक',
        description: 'कर्मचारियों के लिए पहुँच देखें',
      }
    },
    iam: {
      title: 'पहचान और पहुंच प्रबंधन',
      menu: 'मैं हूँ',
      disable: 'अक्षम',
      disabled: 'विकलांग',
      enabled: 'सक्रिय',
      enable: 'सक्षम करें',
      doEnableSuccess: 'उपयोगकर्ता को सफलतापूर्वक सक्षम किया गया',
      doDisableSuccess: 'उपयोगकर्ता सफलतापूर्वक अक्षम हो गया',
      doDisableAllSuccess: 'उपयोगकर्ता (ओं) को सफलतापूर्वक अक्षम किया गया',
      doEnableAllSuccess: 'उपयोगकर्ता (ओं) को सफलतापूर्वक सक्षम किया गया',
      doAddSuccess: 'उपयोगकर्ता (ओं) को सफलतापूर्वक बचाया गया',
      doUpdateSuccess: 'उपयोगकर्ता सफलतापूर्वक सहेजा गया',
      viewBy: 'द्वारा देखें',
      users: {
        name: 'उपयोगकर्ताओं',
        label: 'उपयोगकर्ता',
        exporterFileName: 'users_export',
        doRemoveAllSelectedSuccess: 'अनुमतियाँ सफलतापूर्वक निकाल दी गईं',
      },
      roles: {
        label: 'भूमिकाएँ',
        doRemoveAllSelectedSuccess: 'अनुमतियाँ सफलतापूर्वक निकाल दी गईं',
      },
      edit: {
        title: 'यूजर को संपादित करो',
      },
      new: {
        title: 'नए उपयोगकर्ता',
        titleModal: 'नया उपयोगकर्ता',
        emailsHint: 'अल्पविराम वर्ण का उपयोग करके कई ईमेल पते अलग करें।',
      },
      view: {
        title: 'उपयोगकर्ता देखें',
        activity: 'गतिविधि',
      },
      importer: {
        title: 'उपयोगकर्ताओं को आयात करें',
        fileName: 'users_import_template',
        hint: 'फ़ाइलें / छवियाँ कॉलम स्थान द्वारा अलग की गई फ़ाइलों का URL होना चाहिए। स्पेस द्वारा अलग किए गए संदर्भित रिकॉर्ड की आईडी होना चाहिए। रोल को अंतरिक्ष द्वारा अलग की गई रोल आईडी होना चाहिए।',
      },
      errors: {
        userAlreadyExists: 'इस ईमेल के साथ पहले से प्रयोगकर्ता मौजूद है',
        userNotFound: 'उपयोगकर्ता नहीं मिला',
        disablingHimself: 'आप ऐसा कर सकते हैं',
        revokingOwnPermission: 'आप ऐसा कर सकते हैं',
      },
      destroy: {
        success: 'उपयोगकर्ता को सफलतापूर्वक हटा दिया गया',
        destroyAll: {
          success: 'उपयोगकर्ता (ओं) को सफलतापूर्वक हटा दिया गया',
        },
      },
    },
    alertSubscriptions: {
      name: 'alertSubscriptions??',
      label: 'Alert Subscriptions??',
      menu: "Alert Subscriptions??",
      list: {
        menu: 'Alert Subscription??',
        title: 'Alert Subscription??',
      },
      fields: {
        id: 'Id??',
        orgId: 'Organization??',
        orgPlantId: 'Plant??',
        employeeId: 'Employee??',
        alertName: 'Alert Name??',
        templateType: 'Template Type??',
        isSubscribed: 'Subscribed??',
        createdAt: 'Created at??',
        updatedAt: 'Updated at??',

      },
      subscribed: 'Subscribed??',
      unSubscribed: 'UnSubscribed??',
    },
    alertHistory: {
      name: 'alertHistory??',
      label: 'Alert History??',
      menu: "Alert History??",
      list: {
        menu: 'Alert History??',
        title: 'Alert History??',
      },
      fields: {
        id: 'Id??',
        _id: 'ID??',
        subject: 'Subject??',
        body: 'Body??',
        employeeId: 'Employee??',
        startDate: 'Start Date???',
        endDate: 'End Date??',
      },
    }
  },
  user: {
    fields: {
      id: 'ईद',
      orgId: 'संगठन',
      orgPlantId: 'कारख़ाना',
      authenticationUid: 'प्रमाणीकरण यूआईडी',
      avatars: 'अवतार',
      email: 'ईमेल',
      emails: 'ईमेल (रों)',
      employee: 'कर्मचारियों',
      fullName: 'नाम',
      firstName: 'पहला नाम',
      lastName: 'उपनाम',
      status: 'स्थिति',
      disabled: 'विकलांग',
      phoneNumber: 'फ़ोन नंबर',
      countryCode: 'देश कोड',
      orgPlant: 'संगठन संयंत्र',
      employeeNum: 'कर्मचारी संख्या',
      orgPrefix: 'संगठन कोड',
      role: 'भूमिका',
      createdAt: 'पर बनाया गया',
      updatedAt: 'पर अपडेट किया गया',
      roleUser: 'भूमिका / उपयोगकर्ता',
      roles: 'भूमिकाएँ',
      createdAtRange: 'पर बनाया गया',
      password: 'कुंजिका',
      rememberMe: 'मुझे याद रखना',
      twoFactorEnabled: '2FA सक्षम करें',
      verifyCode: 'कोड',
    },
    enabled: 'सक्रिय',
    disabled: 'विकलांग',
    validations: {
      email: 'ईमेल $ {मान} अमान्य है',
    },
  },
  geoSubSite: {
    fields: {
      locationName: 'स्थान का नाम',
      indoorMap: 'मंजिल की छवि',
      hasIndoorMap: 'इनडोर नक्शा है',
      search: 'पता खोजें',
      latitude: 'अक्षांश',
      longitude: 'देशान्तर',
      floor: 'मंज़िल#',
      maxOccupancy: 'अधिकतम अधिकार क्षेत्र',
      parentSubsite: 'जनक उपवीत',
      zoom: 'ज़ूम',
      bearing: 'सहनशीलता',
      pitch: 'पिच',
      entireArea: 'संपूर्ण क्षेत्र',
      subsite: 'सबसाइट',
      geofence: 'geofence',
    },
    messages: {
      addSuccess: 'सदस्यता सफलतापूर्वक जोड़ा गया',
      editSuccess: 'सदस्यता सफलतापूर्वक संपादित की गई',
      addError: 'कुछ गलत हो गया!',
      editError: 'अपडेट करते समय कुछ गलत हो गया!',
      saveError: 'डेटा सहेजने से पहले जियोफ़ेंस ड्रा करें!',
      saveErrorForSubsite: 'पहले प्लांट के लिए जिओफेंस ड्रा करें!',
      deleteSuccess: 'सदस्यता सफलतापूर्वक हटा दी गई',
      deleteError: 'हटाते समय कुछ गलत हो गया!',
      floorImageIsReq: 'मंजिल की छवि की आवश्यकता है',
      floorNumIsReq: 'मंजिल # की आवश्यकता है',
      parentSubsiteIsReq: 'पेरेंट सब्सक्रिप्शन आवश्यक है',
      noGeoFenceFound: 'कोई जियोफेंस नहीं मिला!',
      addNewSubsite: 'नया सबसाइट जोड़ें',
      actionMenu: 'क्रिया मेनू',
      editGeoFence: 'भू-आकृति संपादित करें',
      editSubsite: 'स स स स स ज स स स',
      typeNameForThisLocation: 'कृपया इस स्थान के लिए एक नाम लिखें। एक बार पूरा होने पर आपको संपादन मोड में डाल दिया जाएगा ताकि आप एक स्थान और पैन की खोज कर सकें, ज़ूम करें और तब तक घुमाएं जब तक आपके पास अपनी पसंद का तरीका न हो',
      editlocation: 'यहां आप चयनित स्थान के लिए विवरण संपादित कर सकते हैं',
      createNew: 'नया बनाओ',
      location: 'स्थान',
      searchlocation: 'स्थान खोजें',
      searchlocationmessage: 'आप का उपयोग करके एक स्थान खोज सकते हैं',
      name: 'नाम',
      coordinates: 'निर्देशांक',
      loading: 'लोड हो रहा है',
    },
    geoFenceArea: 'भू बाड़ क्षेत्र',
    geoFenceCoordinates: 'जियो फेंस कोऑर्डिनेट करता है',
  },
  geoRooms: {
    addRoom: 'Add Room??',
    editRoom: 'Edit Room??',
    fields: {
      roomName: 'कमरे का नाम',
    },
    messages: {
      addSuccess: 'कक्ष को सफलतापूर्वक जोड़ा गया',
      editSuccess: 'कक्ष संपादित सफलतापूर्वक',
      saveSuccess: 'सफलतापूर्वक बचाया',
      deleteSuccess: 'सफ़लतापूर्वक सफलता मिली',
      error: 'कुछ गलत हो गया',
      deleteError: 'हटाते समय कुछ गड़बड़ हो गई',
      saveError: 'कृपया सहेजने से पहले एक बहुभुज बनाएं',
      notFound: 'कोई GeoRooms नहीं मिला!',
    },
  },
  auditLog: {
    menu: 'ऑडिट लॉग',
    title: 'ऑडिट लॉग',
    view: 'ऑडिट लॉग',
    exporterFileName: 'audit_log_export??',
    entityNamesHint: 'अल्पविराम वर्ण का उपयोग करके कई निकाय अलग करें।',
    fields: {
      id: 'ईद',
      timestampRange: 'अवधि',
      entityName: 'सत्ता',
      entityNames: 'संस्थाओं',
      entityId: 'इकाई आईडी',
      action: 'कार्य',
      values: 'मान',
      timestamp: 'दिनांक',
      createdByEmail: 'उपयोगकर्ता ईमेल',
    },
  },
  errorLog: {
    menu: 'त्रुटि लॉग',
    title: 'त्रुटि लॉग',
    view: 'त्रुटि लॉग',
    exporterFileName: 'error_log_export',
    entityNamesHint: 'अल्पविराम वर्ण का उपयोग करके कई निकाय अलग करें।',
    fields: {
      id: 'ईद',
      orgId: 'संगठन',
      orgPlantId: 'कारख़ाना',
      timestampRange: 'अवधि',
      entityName: 'सत्ता',
      entityNames: 'संस्थाओं',
      description: 'विवरण',
      method: 'तरीका',
      values: 'मान',
      timestamp: 'दिनांक',
    },
  },
  settings: {
    title: 'समायोजन',
    menu: 'समायोजन',
    save: {
      success: 'सेटिंग्स सफलतापूर्वक सहेजी गईं। परिवर्तन को प्रभावी करने के लिए पृष्ठ {0} सेकंड में पुनः लोड होगा।',
    },
    fields: {
      primary: 'प्राथमिक रंग',
      secondary: 'द्वितीयक रंग',
      shade: 'छाया',
    },
  },
  arcFlash: {
    title: 'Arc Flash??',
    menu: 'Arc Flash??',
    subMenu: {
      assets: 'Assets??',
    },
    fields: {
      primary: 'प्राथमिक रंग',
      secondary: 'द्वितीयक रंग',
      shade: 'छाया',
    },
    view: {
      title: 'ArcFlash View??',
      label: 'Label??',
      qrCode: 'QR Code??',
      apiError: 'Got an error while loading warning image. Please reload your page.??'
    },
  },
  home: {
    menu: 'घर',
    message: 'यह पृष्ठ केवल प्रदर्शन उद्देश्यों के लिए नकली डेटा का उपयोग करता है। आप इसे दृश्यपटल / दृश्य / होम / होमपेज.जेएस पर संपादित कर सकते हैं।',
    realtimeMapping: 'रियल टाइम मैपिंग',
    analytics: 'एनालिटिक्स',
    managementReports: 'प्रबंधन की रिपोर्ट',
    charts: {
      day: 'दिन',
      red: 'लाल',
      green: 'हरा',
      yellow: 'पीला',
      grey: 'धूसर',
      blue: 'नीला',
      orange: 'संतरा',
      months: {
        1: 'जनवरी',
        2: 'फरवरी',
        3: 'मार्च',
        4: 'अप्रैल',
        5: 'मई',
        6: 'जून',
        7: 'जुलाई',
      },
      eating: 'भोजन',
      drinking: 'पीने',
      sleeping: 'सोया हुआ',
      designing: 'डिज़ाइन बनाना',
      coding: 'कोडिंग',
      cycling: 'सायक्लिंग',
      running: 'चल रहा है',
      customer: 'ग्राहक',
    },
  },
  errors: {
    backToHome: 'घर वापिस जा रहा हूँ',
    403: 'क्षमा करें, आपके पास इस पृष्ठ तक पहुंच नहीं है',
    404: 'क्षमा करें, आपके द्वारा विज़िट किया गया पृष्ठ मौजूद नहीं है',
    500: 'क्षमा करें, सर्वर एक त्रुटि की सूचना दे रहा है',
    forbidden: {
      message: 'मना किया हुआ',
    },
    validation: {
      message: 'एक त्रुटि पाई गई',
    },
    defaultErrorMessage: 'ऑप्स, एक त्रुटि हुई',
  },
  validation: {
    mixed: {
      default: '$ {पाथ} अमान्य है',
      required: '$ {पाथ} की आवश्यकता है',
      oneOf: '$ {पथ} निम्नलिखित मानों में से एक होना चाहिए: $ {मान}',
      notOneOf: '$ {पथ} निम्नलिखित मानों में से एक नहीं होना चाहिए: $ {मान}',
    },
    string: {
      length: '$ {पाथ} बिलकुल $ {लंबाई} अक्षर का होना चाहिए',
      min: '$ {पाथ} कम से कम $ {min} अक्षर का होना चाहिए',
      max: '$ {पाथ} को अधिकतम $ {अधिकतम} वर्णों पर होना चाहिए',
      matches: '$ {path} को निम्नलिखित से मेल खाना चाहिए: "$ {regex}"',
      email: '$ {पाथ} एक वैध ईमेल होना चाहिए',
      url: '$ {पाथ} एक वैध URL होना चाहिए',
      trim: '$ {पाथ} एक छंटनी वाला तार होना चाहिए',
      lowercase: '$ {पाथ} एक लोअरकेस स्ट्रिंग होना चाहिए',
      uppercase: '$ {पाथ} को अपर केस स्ट्रिंग होना चाहिए',
      selected: '$ {पाथ} का चयन करना होगा',
    },
    number: {
      min: '$ {पाथ} $ {मिनट} से अधिक या बराबर होना चाहिए',
      max: '$ {पाथ} $ {अधिकतम} से कम या बराबर होना चाहिए',
      lessThan: '$ {पथ} $ कम से कम {कम} होना चाहिए',
      moreThan: '$ {पथ} $ {अधिक} से अधिक होना चाहिए',
      notEqual: '$ {पथ} $ {notEqual} के बराबर नहीं होना चाहिए',
      positive: '$ {पाथ} एक पॉजिटिव नंबर होना चाहिए',
      negative: '$ {पथ} एक नकारात्मक संख्या होनी चाहिए',
      integer: '$ {पाथ} एक पूर्णांक होना चाहिए',
    },
    date: {
      min: '$ {पथ} फ़ील्ड $ {मिनट} से बाद में होना चाहिए',
      max: '$ {पथ} फ़ील्ड $ {अधिकतम} से पहले होना चाहिए',
    },
    object: {
      noUnknown: '$ {पथ} फ़ील्ड में ऑब्जेक्ट आकार में निर्दिष्ट कीज़ नहीं हो सकते',
    },
    array: {
      min: '$ {पथ} फ़ील्ड में कम से कम $ {मिनट} आइटम होना चाहिए',
      max: '$ {पथ} फ़ील्ड में $ {अधिकतम} आइटम से कम या बराबर होना चाहिए',
    },
  },
  fileUploader: {
    upload: 'डालना',
    image: 'आपको एक छवि अपलोड करनी होगी',
    size: 'फ़ाइल बहुत बड़ी है। अधिकतम अनुमत आकार {0} है',
    formats: 'अवैध प्रारूप। होना चाहिए',
  },
  importer: {
    line: 'लाइन',
    status: 'स्थिति',
    pending: 'विचाराधीन',
    imported: 'आयातित',
    error: 'त्रुटि',
    total: '{0} आयातित, {1} लंबित और {2} त्रुटि के साथ',
    importedMessage: '{1} का {0} संसाधित।',
    noNavigateAwayMessage: 'इस पृष्ठ से दूर नेविगेट न करें या आयात बंद कर दिया जाएगा।',
    completed: {
      success: 'आयात पूरा हुआ। सभी पंक्तियों को सफलतापूर्वक आयात किया गया था।',
      someErrors: 'प्रक्रिया पूरी हो गई, लेकिन कुछ पंक्तियों को आयात नहीं किया जा सका।',
      allErrors: 'आयात विफल रहा। कोई मान्य पंक्तियाँ नहीं हैं।',
    },
    form: {
      downloadTemplate: 'टेम्पलेट डाउनलोड करें',
      hint: 'जारी रखने के लिए फ़ाइल को इस क्षेत्र पर क्लिक करें या खींचें',
    },
    list: {
      discardConfirm: 'क्या आपको यकीन है? गैर-आयातित डेटा खो जाएगा।',
    },
    errors: {
      invalidFileEmpty: 'फ़ाइल खाली है',
      invalidFileExcel: 'केवल एक्सेल (.xlsx) फ़ाइलों की अनुमति है',
      invalidFileUpload: 'अवैध फाइल। सुनिश्चित करें कि आप टेम्पलेट के अंतिम संस्करण का उपयोग कर रहे हैं।',
      importHashRequired: 'आयात हैश की आवश्यकता है',
      importHashExistent: 'डेटा पहले ही आयात किया जा चुका है',
    },
  },
  autocomplete: {
    loading: 'लोड हो रहा है...',
    noOptions: 'कोई डेटा नहीं मिला',
  },
  imagesViewer: {
    noImage: 'कोई तस्वीर नहीं',
  },
  table: {
    noData: 'कोई रिकॉर्ड नहीं मिला',
    loading: 'लोड हो रहा है...',
  },
  body: {
    emptyDataSourceMessage: 'दिखाने के लिए कोई रेकॉर्ड नहीं है',
    editRow: {
      deleteText: 'क्या आप वाकई इस पंक्ति को हटाना चाहते हैं?',
    },
  },
  grouping: {
    placeholder: 'हेडर खींचें ...',
    groupedBy: 'द्वारा समूहीकृत:',
  },
  header: {
    actions: 'क्रिया',
  },
  pagination: {
    labelDisplayedRows: '{०} - {१} का {२}',
    labelDisplayedRowsCustom: '{से} - {से} के {गिनती}',
    labelRowsPerPage: 'प्रति पृष्ठ:',
    labelRowsSelect: 'पंक्तियाँ',
    firstAriaLabel: 'पहला पन्ना',
    previousAriaLabel: 'पिछला पृष्ठ',
    nextAriaLabel: 'अगला पृष्ठ',
    lastAriaLabel: 'अंतिम पृष्ठ',
  },
  toolbar: {
    toolbar: 'कॉलम जोड़ें या निकालें',
    nRowsSelected: '{0} पंक्ति (रों) चयनित',
    showColumnsTitle: 'कॉलम दिखाएं',
    exportTitle: 'निर्यात',
    exportCSVName: 'CSV के रूप में निर्यात करें',
    exportPDFName: 'पीडीएफ के रूप में निर्यात करें',
    searchTooltip: 'खोज',
  },
  insights: {
    menu: "इनसाइट्स"
  },
  devices: {
    menu: "उपकरण"
  },
  dataEntry: {
    menu: "डाटा प्रविष्टि"
  },
  loto: {
    menu: "LOTO"
  },
  mobileLoto: {
    menu: "Mobile LOTO??",
    subMenu: {
      lotoTickets: 'LOTO Tickets??',
    }
  },
  lotoTicketsView: {
    name: 'lOTOTickets??',
    label: 'LOTO Tickets??',
    view: {
      title: 'LOTO Tickets??',
    },
  },
  lotoAssetsView: {
    name: 'lOTOAssets??',
    label: 'LOTO Assets??',
    view: {
      title: 'LOTO Assets??',
    },
  },
};

export default hi;
