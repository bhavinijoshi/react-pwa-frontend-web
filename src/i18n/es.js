const es = {
  common: {
    viewOnMap: 'View On Map??',
    viewLabel: 'View Label??',
    viewDoc: 'View Document??',
    ViewProcedure: 'View Procedure??',
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    quickEdit: 'Edición rapida',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descarte',
    yes: 'si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'comienzo',
    end: 'Final',
    copy: 'Copiado al portapapeles',
    discardEdit: 'Descartar editar',
    percent: 'Por ciento',
    add: 'AÑADIR',
    hide: 'Esconder',
    show: 'mostrar',
    delete: 'Eliminar',
    startDate: 'Fecha de inicio',
    endDate: 'Fecha final',
    invalidDate: 'Fecha invalida',
    indoor: 'Interior',
    outdoor: 'Al aire libre',
    reload: 'Recargar',
    tooltips: {
      employeeInfo: 'Información del empleado',
      employee: 'Empleado',
      copyData: 'Copiar datos'
    },
    associatedDataConfirmModal: '¿Desea eliminar todos los datos asociados con el (los) usuario (s)?',
    roleNotAllowed: 'No puede editar / eliminar a alguien con un rol más alto que usted.',
    apiError: '¡Algo salió mal!',
    errors: {
      employeeFetchError: 'Error al buscar empleados. Vuelve a intentarlo más tarde. ',
      assetFetchError: 'No se pudieron recuperar los elementos. Vuelve a intentarlo más tarde. ',
      subsiteFetchError: 'No se pudieron recuperar los subsitios. Vuelve a intentarlo más tarde.'
    },
    autoComplete: {
      employee: 'Empleado',
      asset: 'Activo'
    },
    done: 'Hecho',
    saveAndProceed: 'Guardar y continuar',
    replace: 'Reemplazar',
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
    title: 'Entelegis SafetyAssist - Cloud SaaS',
  },
  entities: {
    deviceProvisioning: {
      name: 'deviceProvisioning',
      label: 'Aprovisionamiento de dispositivos',
      menu: 'Aprovisionamiento de dispositivos',
      list: {
        menu: 'Aprovisionamiento de dispositivos',
        title: 'Aprovisionamiento de dispositivos',
      },
      create: {
        success: 'El aprovisionamiento del dispositivo se guardó correctamente',
      },
      enumerators: {
        assigneeType: {
          Asset: 'Activo',
        },
        employeeType: {
          Contractor: 'Contratista',
          Visitor: 'Visitante',
        },
      },
    },
    reportsCanned: {
      name: 'informes enlatados',
      label: 'Informes enlatados',
      menu: 'Informes enlatados',
      selectAReportToRun: 'Seleccione un informe para ejecutar',
      selectOrgPlant: 'Seleccionar planta organizativa',
      selectTicketStatus: 'Select Ticket Status??',
      view: {
        title: 'Informes enlatados',
        totalCloseContactByArea: 'Total de contactos cercanos por área',
        totalCloseContactByEmployee: 'Total de contactos cercanos por empleado',
        totalGeoFenceStatusPerEmployeeByDay: 'Estado total de geovalla para empleados por día',
        employeeHealthStatus: 'Estado de salud del empleado',
        employeesHealthScores: 'Puntuaciones de salud de los empleados',
        arcFlashDueForRenewal: 'Arc Flash Due For Renewal??',
        arcFlashReviewsExpiringIn90Days: 'Arc Flash Audit Reviews Expiring In Next 90 Days??',
        lotoTickets: "LOTO - Tickets??",
        lotoCurrentLocks: "LOTO - Current Locks??",
        lotoRecentRemovedLocks: "LOTO – Recent Removed Locks??"
      },
      columns: {
        numOfCloseContacts: '# Contactos cercanos',
        area: 'Zona',
        lastContact: 'Último contacto',
        peopleView: 'Vista de personas',
        employeeNum: 'Empleado #',
        date: 'Fecha',
        totalEmployees: 'Empleados Totales',
        totalOnSite: 'Total en el sitio',
        totalOffSite: 'Total fuera del sitio',
        totalUnknown: 'Total desconocido',
        plant: 'Plantar',
        name: 'Nombre',
        healthStatus: 'Estado de salud',
        lastUpdatedAt: 'Última actualización a las',
        healthScore: 'Puntaje de salud',
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
      menu: 'Tablero'
    },
    organizations: {
      name: 'organizaciones',
      label: 'Organizaciones',
      menu: 'Organizaciones',
      exporterFileName: 'organizaciones_exportación',
      list: {
        menu: 'Organizaciones',
        title: 'Organizaciones',
      },
      create: {
        success: 'Organizaciones guardadas correctamente',
      },
      update: {
        success: 'Organizaciones guardadas correctamente',
      },
      destroy: {
        success: 'Organizaciones eliminadas correctamente',
        destroyAll: {
          success: 'Organizaciones eliminadas correctamente',
        },
      },
      edit: {
        title: 'Editar organizaciones',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        healthPolicyUrl: 'Política de salud URL',
        urlShortCode: 'Código corto de URL',
        orgPrefix: 'Prefijo de la organización',
        primaryContactName: 'Nombre de contacto principal',
        primaryContactEmail: 'Correo electrónico de contacto principal',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevas Organizaciones',
      },
      view: {
        title: 'Ver organizaciones',
      },
      importer: {
        title: 'Importar organizaciones',
        fileName: 'organization_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
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
        success: 'Org Plants guardados correctamente',
      },
      update: {
        success: 'Org Plants guardados correctamente',
        error: '¡Algo salió mal!',
      },
      destroy: {
        success: 'Org Plants eliminados correctamente',
        destroyAll: {
          success: 'Org Plants eliminados correctamente',
        },
      },
      edit: {
        title: 'Editar Org Plants',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        primaryContactName: 'Nombre de contacto principal',
        primaryContactEmail: 'Correo electrónico de contacto principal',
        orgId: 'Organización',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        maxOccupancy: 'Máxima Ocupacion',
        urlShortCode: 'Código corto de URL',
        enableBLEServices: 'Habilitar servicios BLE',
        enableArcFlash: 'Habilitar arco eléctrico',
        enablePandemic: 'Habilitar pandemia',
        enableLOTO: 'Habilitar LOTO',
        gatewayPingIPAddress: 'Dirección IP de ping de la puerta de enlace',
        arcFlashStandardsOrg: 'Organización de estándares de arco eléctrico',
        requireLOTOTicketToLock: 'LOTO locking requires Scheduled Ticket??'
      },
      new: {
        title: 'Nuevas Org Plants',
      },
      view: {
        title: 'Ver Org Plants',
      },
      importer: {
        title: 'Importar Org Plants',
        fileName: 'orgPlants_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    orgHierarchy: {
      name: 'orgHierarchy',
      label: 'Jerarquía organizativa',
      menu: 'Jerarquía organizativa',
      exporterFileName: 'orgHierarchy_export',
      searchMode: 'Modo de búsqueda',
      orgHierarchyDelete: 'OrgHierarchy Delete',
      deleting: 'Eliminando',
      primaryContactName: 'Nombre de contacto principal',
      primaryContactEmail: 'Correo electrónico de contacto principal',
      urlShortCode: 'Código corto de URL',
      orgHierarchy: 'OrgHierarchy',
      editing: 'Edición',
      adding: 'Añadiendo',
      under: 'Debajo',
      deleteItem: 'Eliminar elemento',
      editItem: 'Editar artículo',
      addPlant: 'Agregar sitio',
      configureGeoFence: 'Configurar Geo Fence',
      addSection: 'Agregar sección',
      addArea: 'Agregar área',
      addSubArea: 'Agregar subárea',
      contains: 'Contiene',
      Startswith: 'Comienza con',
      maxOccupancy: 'Máxima Ocupacion',
      list: {
        menu: 'OrgHierarchy',
        title: 'Jerarquía organizativa',
      },
      create: {
        success: 'OrgHierarchy guardado correctamente',
      },
      update: {
        success: 'OrgHierarchy guardado correctamente',
      },
      destroy: {
        success: 'OrgHierarchy eliminado correctamente',
        destroyAll: {
          success: 'OrgHierarchy (s) eliminado correctamente',
        },
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        orgId: 'Organización',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nueva jerarquía organizativa',
      },
      view: {
        title: 'Ver jerarquía organizativa',
      },
      importer: {
        title: 'Importar jerarquía organizativa',
        fileName: 'orgHierarchy_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
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
        success: 'Secciones de la organización guardadas correctamente',
      },
      update: {
        success: 'Secciones de la organización guardadas correctamente',
      },
      destroy: {
        success: 'Secciones de la organización eliminadas correctamente',
        destroyAll: {
          success: 'Secciones de la organización eliminadas correctamente',
        },
      },
      edit: {
        title: 'Editar secciones de la organización',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevas secciones de organización',
      },
      view: {
        title: 'Ver secciones de la organización',
      },
      importer: {
        title: 'Importar secciones de organización',
        fileName: 'orgSections_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
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
        success: 'Área guardada con éxito',
      },
      update: {
        success: 'Área guardada con éxito',
      },
      destroy: {
        success: 'Área eliminada con éxito',
        destroyAll: {
          success: 'Área (s) eliminada correctamente',
        },
      },
      edit: {
        title: 'Área de edición',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'NUEVA Área',
      },
      view: {
        title: 'Ver área',
      },
      importer: {
        title: 'Importar áreas',
        fileName: 'orgAreas_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    orgSubAreas: {
      name: 'orgSubAreas',
      label: 'Subáreas',
      menu: 'Subáreas',
      exporterFileName: 'orgSubAreas_export',
      list: {
        menu: 'Subáreas',
        title: 'Subáreas',
      },
      create: {
        success: 'Subárea guardada correctamente',
      },
      update: {
        success: 'Subárea guardada correctamente',
      },
      destroy: {
        success: 'Subárea eliminada correctamente',
        destroyAll: {
          success: 'Subáreas eliminadas correctamente',
        },
      },
      edit: {
        title: 'Editar subárea',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nueva Subárea',
      },
      view: {
        title: 'Ver subárea',
      },
      importer: {
        title: 'Importar subáreas',
        fileName: 'orgSubAreas_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    peopleView: {
      name: 'Vista de personas',
      label: 'Vista de personas',
      menu: 'Vista de personas',
      contactOccurencesbyDay: 'Contacto con sucesos por día',
      contactOccurences: 'Eventos de contacto',
      healthMonitoring: 'Vigilancia de la salud',
      ambitentTemperature: 'Temperatura ambiente',
      temperature: 'Temperatura',
      heartRate: 'Ritmo cardiaco',
      ambitentTemperatureC: 'Temperatura ambiente ° C',
      temperatureC: 'Temperatura °C',
      heartRatebeatsPermin: 'Latidos de frecuencia cardíaca / min',
      employeeStatistics: 'Seleccione un empleado para ver las estadísticas',
      columns: {
        employeeNum: 'Empleado#',
        name: 'Nombre',
        location: 'Ubicación',
        timeContacted: 'Hora contactada',
        gpsLatitude: 'Latitud GPS',
        gpsLongitude: 'Longitud GPS',
        indoorXCoordinate: 'Coordenada X interior',
        indoorYCoordinate: 'Coordenada Y interior',
        geoSubsiteName: 'Nombre del geo-subsitio',
        crossingDate: 'Fecha de cruce',
        status: 'Estado',
        timeRecorded: 'Tiempo registrado',
      },
      tooltip: {
        openCalendarView: 'Abrir vista de calendario'
      },
      today: 'Hoy',
      assessments: 'Evaluaciones de salud',
      contactHistory: 'Historial de contacto',
      movementHistory: 'Historia del movimiento',
      geofenceCrossings: 'Cruces de geovalla',
      firstGenContacts: 'Contactos de 1.a generación',
      secondGenContacts: 'Contactos de 2.a generación',
      thirdGenContacts: 'Contactos de 3.ª generación',
      travelHistory: 'Viaje',
      testingHistory: 'Pruebas',
      vaccineHistory: 'Vacuna Historia',
      movements: 'Movimientos',
      details: 'Detalles',
      peopleHistoricalInformation: 'Información histórica de la gente',
      searchEmployee: 'Buscar empleado',
      filter: 'Filtrar',
      moreInfo: 'Más información',
      infoBody: {
        testType: 'Tipo de prueba',
        method: 'Método',
        result: 'Resultado',
        count: 'Cuenta',
        destination: 'Destino',
        travelType: 'Tipo de viaje',
        vaccineType: 'Tipo de vacuna',
        express: 'Prueba rápida',
        lab: 'Prueba de laboratorio',
        swab: 'Hisopo',
        blood: 'Sangre',
        urine: 'Orina',
        pending: 'Pendiente',
        positive: 'Positivo',
        negative: 'Negativo',
        international: 'Internacional',
        local: 'local',
      },
      warningMovementHistory: 'A maximum of 2500 records was loaded for movement history, please consider filtering using the date pickers.??',
      warningHealthMonitoring: 'A maximum of 2500 records was loaded for health monitoring, please consider filtering using the date pickers.??'
    },
    securityGate: {
      name: 'Puerta de seguridad',
      label: 'Puerta de seguridad',
      menu: 'Puerta de seguridad',
      employeeHealthHistoryLast14Days: 'Historial de salud del empleado últimos 14 días',
      temperature: 'Temperatura',
      time: 'Hora',
      temperatureC: 'Temperatura ° C',
      columns: {
        lastName: 'Apellido',
        firstName: 'Primer nombre',
        status: 'Estado',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha final',
        daysRemaining: 'Días restantes',
        timeOnSite: 'Tiempo en el sitio',
        minutesElapsed: 'Minutos transcurridos',
        timeRecorded: 'Tiempo registrado',
        ambitentTemperatureC: 'Temperatura ambiente ° C',
        temperatureC: 'Temperatura °C',
        heartRatebeatsPermin: 'Latidos de frecuencia cardíaca / min',
      },
      messages: {
        saveSuccess: 'Guardado exitosamente',
        saveError: '¡Algo salió mal!',
        ok: 'Okay',
        fail: '¡Fallar!',
      },
      employeeInfotab: {
        name: 'Nombre',
        employeeNum: 'Empleado#',
        title: 'Título',
        currentAction: 'Acción actual',
        status: 'Estado',
        healthStatus: 'Estado de salud',
        building: 'edificio',
        gpsLatitude: 'Latitud GPS',
        gpsLongitude: 'Longitud GPS',
        gpsBearing: 'Orientación GPS',
        gpsSpeed: 'Velocidad GPS',
        gpsAltitude: 'Altitud GPS',
        indoorXCoordinate: 'Coordenada X interior',
        indoorYCoordinate: 'Coordenada Y interior',
        lastReport: 'Último informe',
        viewCurrentLocation: 'Ver ubicación actual',
        currentLocation: 'Current Location??',
        beacon: 'Faro'
      },
      foundSomeError: 'encontré algún error!',
      searchEmployee: 'Buscar empleado',
      filter: 'Filtrar',
      readBluetooth: 'Leer Bluetooth',
      readQRCode: 'Leer código QR',
      takeTemperature: 'Toma temperatura',
      quarantine: 'Cuarentena',
      unquarantine: 'Unquarantine',
      pleaseselectAnEmployeeToSeeStatistics: 'Seleccione un empleado para ver las estadísticas',
      needsTemperature: 'Necesita temperatura',
      quarantineList: 'Lista de cuarentena',
    },
    qrcodeReader: {
      healthPass: 'Pase de salud',
      displayHealthPass: 'Muestre su código QR de Health Pass',
      matchFound: 'Coincidencia encontrada',
      matchNotFound: 'Coincidencia no encontrada',
    },
    nurseStation: {
      name: 'Enfermería',
      label: 'Enfermería',
      menu: 'Enfermería',
      employeeHealthHistoryLast14Days: 'Historial de salud del empleado últimos 14 días',
      temperature: 'Temperatura',
      time: 'Hora',
      temperatureC: 'Temperatura ° C',
      filter: 'Filtrar',
      reason: 'Razón',
      quarantineLocations: {
        label: 'Seleccione una ubicación de cuarentena',
        site: 'Sitio',
        home: 'Casa',
        hotel: 'hotel'
      },
      columns: {
        timeRecorded: 'Tiempo registrado',
        ambitentTemperatureC: 'Temperatura ambiente ° C',
        temperatureC: 'Temperatura °C',
        heartRatebeatsPermin: 'Latidos de frecuencia cardíaca / min',
        lastName: 'Apellido',
        firstName: 'Primer nombre',
        status: 'Estado',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha final',
        daysRemaining: 'Días restantes',
        timeOnSite: 'Tiempo en el sitio',
        minutesElapsed: 'Minutos transcurridos',
        assessmentDate: 'Fecha de evaluación',
        type: 'Tipo',
      },
      messages: {
        saveSuccess: 'Guardado exitosamente',
        saveError: '¡Algo salió mal!',
        ok: 'Okay',
        fail: '¡Fallar!',
        gotHere: 'got here, depurando por qué las llamadas posteriores a connectBLEDevice cuando se hace clic no llegan aquí.',
        connect: 'CONECTAR',
        connecting: 'CONECTANDO ...',
        qrError: '¡FORMATO QR NO VÁLIDO!',
      },
      foundsomeerror: 'encontré algún error',
      readBluetooth: 'Leer Bluetooth',
      readQRCode: 'Leer código QR',
      takeTemperature: 'Toma temperatura',
      beginHealthAssessment: 'Comenzar la evaluación de salud',
      quarantine: 'Cuarentena',
      unquarantine: 'Unquarantine',
      pleaseSelectanEmployeeToSeeStatistics: 'Seleccione un empleado para ver las estadísticas',
      assessments: 'Evaluaciones',
      needsTemperature: 'Necesita temperatura',
      quarantineList: 'Lista de cuarentena',
      assesmentModal: {
        healthAssessment: 'Valoración de Salud',
        name: 'Nombre',
        symptoms: 'Síntomas',
        healthStatus: 'Estado de salud',
      },
      HealthAssesment: {
        Assesmentsave: 'Evaluación guardada con éxito',
        somethingWentWrong: 'Algo salió mal',
        healthAssessment: 'Valoración de Salud',
        healthAssessmentEmployee: 'Complete la evaluación de salud de este empleado',
        pickOne: 'Elegir uno',
        selectHealthStatus: 'Seleccione el estado de salud',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha final',
      },
      onsite: 'En el sitio',
      offsite: 'Fuera del sitio'
    },
    managerView: {
      name: 'Vista de administrador',
      label: 'Vista de administrador',
      menu: 'Vista de administrador',
      assessment: {
        fever: 'Fiebre',
        tiredness: 'Cansancio',
        dryCough: 'Tos seca',
        achesAndPains: 'Achaques',
        nasalCongestion: 'Congestión nasal',
        runnyNose: 'Rinorrea',
        soreThroat: 'Dolor de garganta',
        diarrhea: 'Diarrea',
        difficultyBreathing: 'Respiración dificultosa',
        travelledRecently: 'Viajado recientemente',
        past14DaysHistory: '¿Ha viajado en los últimos 14 días?',
        next14DaysHisto: '¿Planeas viajar en los próximos 14 días?',
        exposedToPositivePerson: 'Expuesto a persona positiva',
        testedPositiveForCovid19: 'Probado positivo para Covid-19',
        testedNegativeForCovid19: 'Probado negativo para Covid-19',
        vaccinatedForCovid19: 'Vacunado contra Covid-19',
      },
      columns: {
        employeeNum: 'Empleado#',
        name: 'Nombre',
        location: 'Ubicación',
        timeContacted: 'Hora contactada',
        gpsLatitude: 'Latitud GPS',
        gpsLongitude: 'Longitud GPS',
        indoorXCoordinate: 'Coordenada X interior',
        indoorYCoordinate: 'Coordenada Y interior',
        geoSubsiteName: 'Nombre del geo-subsitio',
        crossingDate: 'Fecha de cruce',
        status: 'Estado',
        timeRecorded: 'Tiempo registrado',
        lastName: 'Apellido',
        firstName: 'Primer nombre',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha final',
        daysRemaining: 'Días restantes',
        timeOnSite: 'Tiempo en el sitio',
        minutesElapsed: 'Minutos transcurridos',
        documentName: 'nombre del documento',
        hierarchy: 'Jerarquía',
        version: 'Versión',
        lastUpdated: 'Última actualización',
        lastUpdatedBy: 'Actualizado por última vez por',
        type: 'Tipo',
        assessmentDate: 'Fecha de evaluación',
      },
      chartComboHealthStatus: {
        weeklyEmployeeSymptomsVsCloseContacts: 'Síntomas semanales de los empleados frente a contactos cercanos',
        week: 'Semana',
        numOfDay: 'Número de empleados',
        reportedSymptomatic: 'Sintomático informado',
        closeContactOccurences: 'Situaciones de contacto cercano',
      },
      stats: 'Estadísticas',
      needsTemperature: 'Necesita temperatura',
      assessmentFailures: 'Fallos de evaluación',
      quarantineList: 'Lista de cuarentena',
      protocols: 'Protocolos',
    },
    selfAssessment: {
      menu: 'Auto evaluación',
      pageTitle: 'Auto-asesoramiento',
      title: 'Evaluaciones anteriores',
      healthStatus: "Estado de salud",
      cardTitle: "Última autoevaluación",
      noRisk: {
        status: 'No Risk??',
        consequences: 'Valid Entry??',
        recommendations: 'Enter safely Keep social distancing Wash hands frequently Use sanitizer??',
      },
      lowRisk: {
        status: 'Low Risk??',
        consequences: 'No Entry for 1 day or until resolved??',
        recommendations: 'GET PPE??',
      },
      mediumRisk: {
        status: 'Medium Risk??',
        consequences: 'No Entry for minimum 14 days from travel return date??',
        recommendations: 'Self Isolate??',
      },
      highRisk: {
        status: 'High Risk??',
        consequences: 'No Entry for minimum 21 days or until resolved??',
        recommendations: 'Call 911\nGo to Hospital\nSelf Isolate\nCall your doctor??',
      },
      additionalInfo: "Información adicional",
      quarantineLocation: "Ubicación de cuarentena",
      quarantineLocationDescription: "Elija su ubicación de cuarentena preferida",
      plantToTravel: 'Do you plan to travel in the next 14 days??',
      haveYouTravelled: 'Have you travelled in the past 14 days??',
      travelledRecently: 'Travelled recently??',
      fever: 'Fever??',
      tiredness: 'Tiredness??',
      dryCough: 'Dry Cough??',
      achesAndPains: 'Aches And Pains??',
      nasalCongestion: 'Nasal Congestion??',
      runnyNose: 'Runny Nose??',
      soreThroat: 'Sore Throat??',
      diarrhea: 'Diarrhea??',
      difficultyBreathing: 'Difficulty Breathing??',
      exposedToPositivePerson: 'Exposed to positive person??',
      testedPositiveForCovid19: 'Tested positive for Covid-19??',
      testedNegativeForCovid19: 'Tested negative for Covid-19??',
      vaccinatedForCovid19: 'Vaccinated for Covid-19??',
      pickOne: 'Pick One??',
      healthy: 'Healthy??',
      quarantined: 'Quarantined??',
      symptomatic: 'Symptomic??',
      death: 'Death??',
      recovered: 'Recovered??',
      nurse: 'Nurse??',
      self: 'Self??',
      all: 'All??'
    },
    healthAssessments: {
      menu: 'Health Assessments??',
      pageTitle: 'Health Assesments??',
      title: 'Previous Assessments??',
      selectEmployee: "Please select employee??"
    },
    dashboardContactTracing: {
      name: 'Panel de seguimiento de contactos',
      label: 'Panel de seguimiento de contactos',
      menu: 'Panel de seguimiento de contactos',
      charts: {
        day: 'Día',
        months: {
          1: 'enero',
          2: 'febrero',
          3: 'marzo',
          4: 'abril',
          5: 'Mayo',
          6: 'junio',
          7: 'julio',
        },
        onsite: 'En el sitio',
        offsite: 'Fuera del sitio',
        unknown: 'Desconocido',
        totalNumOfContactsPerDay: 'Cantidad total de contactos cercanos por día',
        numOfCloseContactsOccurancePerDay: '# Eventos de contacto cercano / día',
        totalNumOfContactsPerWeek: 'Cantidad total de contactos cercanos por semana',
        numOfCloseContactsOccurancePerWeek: '# Eventos de contacto cercano / semana',
        areaWithHighestRateOfCloseContact: 'Áreas con la mayor tasa de contacto cercano',
        numberOfOccurances: 'Número de incidencias',
        siteArea: 'Área del sitio',
        employeeWithHighestRateOfCloseContact: 'Empleados con la mayor tasa de contacto cercano',
        totalEmployeeGeoFenceStatusLast7Days: 'Estado total de geovalla de empleados últimos 7 días',
      },
      reportHeader: {
        employeeGeoFenceStatusMTD: 'Estado de geovalla del empleado MTD',
        employeeGeoFenceStatusToday: 'Estado de geovalla del empleado hoy',
      },
    },
    dashboardEmployeeHealth: {
      name: 'Panel de salud del empleado',
      label: 'Panel de salud del empleado',
      menu: 'Panel de salud del empleado',
      charts: {
        day: 'Día',
        months: {
          1: 'enero',
          2: 'febrero',
          3: 'marzo',
          4: 'abril',
          5: 'Mayo',
          6: 'junio',
          7: 'julio',
        },
        weeklyEmployeeSymptonsVsCloseContacts: 'Síntomas semanales de los empleados frente a contactos cercanos',
        week: 'Semana',
        numOfDay: 'Número de empleados',
        reportedSymptomatic: 'Sintomático informado',
        closeContactOccurences: 'Situaciones de contacto cercano',
        topWorkAreaswithSymptomaticEmployees: 'Áreas de trabajo principales con empleados sintomáticos',
        numberOfEmployeesSymptomatic: 'Número de empleados sintomáticos',
        siteOrArea: 'Área del sitio',
        employeeHealthStatistics: 'Estadísticas de salud de los empleados',
        averageEmployeeTemperaturelast14Days: 'Temperatura promedio de los empleados',
        noIssues: 'Sin problemas',
        closeContact: 'Contacto cercano',
        symptomatic: 'Sintomático',
        confirmed: 'Confirmado',
        recovered: 'Recuperado',
        deaths: 'Fallecidos',
      },
    },
    dashboardHardwareHealth: {
      name: 'Hardware Dashboard??',
      label: 'Hardware Dashboard??',
      menu: 'Hardware Dashboard??',
      mtd: 'Month to Date??',
      daily: 'Daily??',
      reportGateway: 'Gateway Report??',
      reportBangle: 'Bangle Report??',
      reportPuck: 'Puck Report??',
      reportiPhone: 'iPhone Report??',
      reportAndroid: 'Android Report??',
      reportTotalDevices: 'Total Devices Report??',
      charts: {
        active: 'Active??',
        inActive: 'Inactive??',
      }
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
      name: 'Configurar geocercas',
      label: 'Configurar geocercas',
      menu: 'Configurar geocercas',
    },
    mapOutdoorIndoor: {
      name: 'Mapeo exterior / interior',
      label: 'Mapeo exterior / interior',
      menu: 'Mapeo exterior / interior',
      employeeOrAssetList: 'Lista de empleados / activos',
      filter: 'Filtrar',
      latitude: 'Latitud',
      longitude: 'Longitud',
      zoom: 'Enfocar',
      bearing: 'Llevando',
      pitch: 'Tono',
      people: 'Personas',
      bleGateways: 'Pasarelas BLE',
      bleBeacons: 'Balizas BLE',
      employeesProtected: 'Empleados protegidos',
      socialDistancingCompliance: 'Cumplimiento de distanciamiento social',
      nonCompliant: 'No cumple',
      teamMemberAtRisk: 'Miembro del equipo en riesgo',
      immune: 'Inmune',
      noContactsToDisplay: 'No hay contactos para mostrar',
      customLabelName: 'Nombre de etiqueta personalizada',
      atRisk: 'En Riesgo',
      arcflashes: 'Destellos de arco??'
    },
    assetMapping: {
      menu: 'Mapeo de activos',
      assets: 'Assets??',
      dragAndDrop: 'Drag & drop??',
      assetOnMap: 'the asset on map to create a new asset on that location??',
      bleBeacon: 'BLE Beacon??',
      bleGateway: 'BLE Gateway??',
      entireArea: 'Entire Area??',
      arcflash: 'Arc Flash??',
      assetOnMapEdit1: 'Search existing asset,??',
      assetOnMapEdit2: 'unmapped asset on map to add a location to it??',
      new: 'New??',
      existing: 'Existing??'
    },
    document: {
      name: 'documento',
      label: 'Documentos',
      menu: 'Documentos',
      exporterFileName: 'documento_exportación',
      list: {
        menu: 'Documentos',
        title: 'Documentos',
      },
      create: {
        success: 'Documento guardado correctamente',
      },
      update: {
        success: 'Documento guardado correctamente',
      },
      destroy: {
        success: 'Documento eliminado correctamente',
        destroyAll: {
          success: 'Documento (s) eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar documento',
      },
      fields: {
        id: 'Carné de identidad',
        docType: 'Tipo de Documento',
        docCategory: 'Categoría de documento',
        sourceId: 'Fuente',
        name: 'Nombre',
        url: 'URL',
        tagList: 'Lista de etiquetas',
        version: 'Versión',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSection: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {
        docType: {
          Pandemic: 'Pandemia',
          ArcFlash: 'Arco eléctrico',
          LOTO: 'LOTO',
          BleGateway: 'BleGateway'
        },
      },
      new: {
        title: 'Nuevo documento',
      },
      view: {
        title: 'Ver documento',
      },
      importer: {
        title: 'Importar documentos',
        fileName: 'document_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    asset: {
      name: 'activo',
      label: 'Bienes',
      menu: 'Bienes',
      exporterFileName: 'asset_export',
      list: {
        menu: 'Bienes',
        title: 'Bienes',
      },
      create: {
        success: 'El activo se guardó correctamente',
      },
      update: {
        success: 'El activo se guardó correctamente',
      },
      destroy: {
        success: 'Activo eliminado correctamente',
        destroyAll: {
          success: 'Activo (s) eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar activo',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        assetType: 'Tipo de activo',
        assetCategory: 'Asset Category??',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        productType: 'Tipo de producto',
        warningLabelImageUrl: 'Imagen de etiqueta de advertencia',
        limitedApproachBoundaryRange: 'Límite de aproximación limitada',
        limitedApproachBoundary: 'Límite de aproximación limitada',
        restrictedApproachBoundaryRange: 'Límite de acceso restringido',
        restrictedApproachBoundary: 'Límite de acceso restringido',
        prohibitedApproachBoundaryRange: 'Límite de acceso prohibido',
        prohibitedApproachBoundary: 'Límite de acceso prohibido',
        predictedArcingCurrentRange: 'Corriente de arco prevista',
        predictedArcingCurrent: 'Corriente de arco prevista',
        arcDurationRange: 'Duración del arco',
        arcDuration: 'Duración del arco',
        incidentEnergyRange: 'Energía incidente',
        incidentEnergy: 'Energía incidente',
        ppeRequirementsFootHand: 'Requisitos de PPE Pie / Mano',
        ppeREquirementsEyeHead: 'Requisitos de EPP Ojo / Cabeza',
        ppeRequirementsBody: 'Organismo de requisitos de EPP',
        documents: 'Documentos',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        Password: 'Contraseña',
        LastHeartbeat: 'Último latido del corazón Fecha',
        ipaddress: 'Dirección IP',
        state: 'Estado',
        hostname: 'Nombre de host',
        softwareVersion: 'Versión del software',
        environmentVersion: 'Versión de entorno',
        osVersion: 'Versión del sistema operativo',
        Latitude: 'Latitud',
        Longitude: 'Longitud',
        X: 'X',
        Y: 'Y',
        location: 'Ubicación',
        deviceType: 'Tipo de dispositivo',
        deviceTypeName: 'Nombre del tipo de dispositivo',
        softwareUpdateStatus: 'Software Update Status??',
        CheckWifiIPAddress: 'Compruebe la dirección IP de Wifi??',
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
        lockStatus: 'Lock Status??',
        lotoHazardId: 'LOTO Lock Out Hazards??'
      },
      updateAvailable: 'Update available??',
      upToDate: 'Up to date??',
      enumerators: {
        assetType: {
          ArcFlash: 'Arco eléctrico',
          Machine: 'Machine',
          PLC: 'PLC',
          BleGateway: 'BleGateway',
          BleBeacon: 'BleBeacon'
        },
      },
      new: {
        title: 'Activo nuevo',
      },
      view: {
        title: 'Ver activo',
        downloadSetings: 'Configuración de descarga'
      },
      importer: {
        title: 'Importar activos',
        fileName: 'asset_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
      deleteWarning: 'If this Asset is a Root Node of any Energy Hierarchy, Entire Energy Hierarchy will be deleted!??',
      deleteWarningMany: 'If any Asset of the selected row(s) is a Root Node of any Energy Hierarchy, Entire Energy Hierarchy will be deleted!??',
      energySources: 'Energy Sources??',
      energyHierarchy: 'Energy Hierarchy??',
      lotoProcedure: 'LOTO Procedure??',
      arcFlashLabel: 'ArcFlash Label??'
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
        id: 'Carné de identidad',
        name: 'Nombre',
        description: 'Descripción',
        properties: 'Propiedades',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        Password: 'Contraseña',
        LastHeartbeat: 'Último latido del corazón',
        ipaddress: 'Dirección IP',
        state: 'Estado',
        hostname: 'Nombre de host',
        softwareVersion: 'Versión del software',
        environmentVersion: 'Versión del entorno',
        osVersion: 'Versión del sistema operativo'
      },
    },
    cloudadmin: {
      menu: 'Administrador de la nube',
      title: 'Registro del servidor backend'
    },
    wearablesUpdate: {
      menu: 'Actualización de wearables',
      connect: 'connect??',
      diconnected: 'Diconnected??',
      minorCode: 'Minor code??',
      sendCmd: 'Send CMD??',
      getsettings: 'getSettings??',
      getversion: 'getVersion??',
      getuuidminorcode: 'getUUIDMinorCode??',
      timesync: 'timeSync??',
      upload: 'upload??',
      reboot: 'reboot??',
      setsettings: 'setSettings??',
      puck: 'Puck??',
      uploadfile: 'Upload File??',
      history: 'HISTORY??',
    },
    envvariables: {
      menu: 'Variables de entorno??',
    },
    downloads: {
      downloads: 'Descargas',
      label: 'Descargas',
      menu: 'Descargas',
      android: 'SafetyAssist Mobile - Android??',
      iphone: 'SafetyAssist Mobile - IOS (iphone, ipad)??',
      diawi: 'Or install from Diawi??',
    },
    pandemicAssessment: {
      name: 'pandemia de evaluación',
      label: 'Evaluaciones pandémicas',
      menu: 'Evaluaciones pandémicas',
      exporterFileName: 'pandemicAssessment_export',
      list: {
        menu: 'Evaluaciones pandémicas',
        title: 'Evaluaciones pandémicas',
      },
      create: {
        success: 'Evaluación pandémica guardada con éxito',
      },
      update: {
        success: 'Evaluación pandémica guardada con éxito',
      },
      destroy: {
        success: 'Evaluación de la pandemia eliminada correctamente',
        destroyAll: {
          success: 'Evaluación (es) de pandemia eliminada correctamente',
        },
      },
      edit: {
        title: 'Editar evaluación de pandemia',
      },
      fields: {
        id: 'Carné de identidad',
        hasFlu: 'Gripe',
        hasHeadache: 'Dolor de cabeza',
        status: 'Estado',
        recommendedAction: 'Acción sugerida',
        hasDryCough: 'Tos seca',
        employeeId: 'Paciente',
        assessedById: 'Evaluada por',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      enumerators: {
        status: {
          Unknown: 'Desconocido',
          Symptomatic: 'Sintomático',
          Healthy: 'Saludable',
        },
        recommendedAction: {
          None: 'Ninguna',
          IsolationAtWork: 'Aislamiento en el trabajo',
          IsolationAtHome: 'AislamientoEn Casa',
          Hospitalization: 'Hospitalización',
          DoctorFollowup: 'DoctorSeguimiento',
        },
      },
      new: {
        title: 'Nueva pandemia',
      },
      view: {
        title: 'Ver evaluación pandémica',
      },
      importer: {
        title: 'Importar evaluaciones de pandemias',
        fileName: 'pandemicAssessment_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    pandemicTemperature: {
      name: 'pandemia temperatura',
      label: 'Temperaturas pandémicas',
      menu: 'Temperaturas pandémicas',
      exporterFileName: 'pandemicTemperature_export',
      list: {
        menu: 'Temperaturas pandémicas',
        title: 'Temperaturas pandémicas',
      },
      create: {
        success: 'Temperatura pandémica guardada con éxito',
      },
      update: {
        success: 'Temperatura pandémica guardada con éxito',
      },
      destroy: {
        success: 'Temperatura pandémica eliminada correctamente',
        destroyAll: {
          success: 'Las temperaturas pandémicas se eliminaron correctamente',
        },
      },
      edit: {
        title: 'Editar temperatura pandémica',
      },
      fields: {
        id: 'Carné de identidad',
        takenById: 'Tomada por',
        temperatureRange: 'Temperatura',
        temperature: 'Temperatura',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nueva temperatura pandémica',
      },
      view: {
        title: 'Ver temperatura pandémica',
      },
      importer: {
        title: 'Importar temperaturas pandémicas',
        fileName: 'pandemicTemperature_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    pandemicCountry: {
      name: 'pandemiaPaís',
      label: 'Países pandémicos',
      menu: 'Países pandémicos',
      exporterFileName: 'pandemicCountry_export',
      list: {
        menu: 'Países pandémicos',
        title: 'Países pandémicos',
      },
      create: {
        success: 'País pandémico guardado correctamente',
      },
      update: {
        success: 'País pandémico guardado correctamente',
      },
      destroy: {
        success: 'País pandémico eliminado correctamente',
        destroyAll: {
          success: 'Los países de la pandemia se eliminaron correctamente',
        },
      },
      edit: {
        title: 'Editar país pandémico',
      },
      fields: {
        id: 'Carné de identidad',
        country: 'País',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevo país pandémico',
      },
      view: {
        title: 'Ver país pandémico',
      },
      importer: {
        title: 'Importar países pandémicos',
        fileName: 'pandemicCountry_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
      pandemicCountryStats: {
        name: 'pandemicCountryStats',
        label: 'Estadísticas de países pandémicos',
        menu: 'Estadísticas de países pandémicos',
        exporterFileName: 'pandemicCountryStats_export',
        list: {
          menu: 'Estadísticas de países pandémicos',
          title: 'Estadísticas de países pandémicos',
        },
        create: {
          success: 'Estadísticas de países pandémicos guardadas correctamente',
        },
        update: {
          success: 'Estadísticas de países pandémicos guardadas correctamente',
        },
        destroy: {
          success: 'Las estadísticas de países pandémicos se eliminaron correctamente',
          destroyAll: {
            success: 'Las estadísticas de países pandémicos se eliminaron correctamente',
          },
        },
        edit: {
          title: 'Editar estadísticas de países pandémicos',
        },
        fields: {
          id: 'Carné de identidad',
          country: 'País',
          confirmedRange: 'Confirmado',
          confirmed: 'Confirmado',
          recoveredRange: 'Recuperado',
          recovered: 'Recuperado',
          criticalRange: 'Crítico',
          critical: 'Crítico',
          deathsRange: 'Fallecidos',
          deaths: 'Fallecidos',
          latitudeRange: 'Latitud',
          latitude: 'Latitud',
          longitudeRange: 'Longitud',
          longitude: 'Longitud',
          createdAt: 'Creado en',
          updatedAt: 'Actualizado en',
          createdAtRange: 'Creado en',
        },
        new: {
          title: 'Nuevas estadísticas de países pandémicos',
        },
        view: {
          title: 'Ver estadísticas de países pandémicos',
        },
        importer: {
          title: 'Importar estadísticas de países pandémicos',
          fileName: 'pandemicCountryStats_import_template',
          hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
    },
    locations: {
      name: 'ubicaciones',
      label: 'Ubicaciones',
      menu: 'Ubicaciones',
      exporterFileName: 'location_export',
      list: {
        menu: 'Ubicaciones',
        title: 'Ubicaciones',
      },
      create: {
        success: 'Ubicaciones guardadas correctamente',
      },
      update: {
        success: 'Ubicaciones guardadas correctamente',
      },
      destroy: {
        success: 'Ubicaciones eliminadas correctamente',
        destroyAll: {
          success: 'Ubicaciones eliminadas correctamente',
        },
      },
      edit: {
        title: 'Editar ubicaciones',
      },
      fields: {
        id: 'Carné de identidad',
        userId: 'Usuario',
        deviceId: 'Dispositivo',
        latitudeRange: 'Latitud',
        latitude: 'Latitud',
        longitudeRange: 'Longitud',
        longitude: 'Longitud',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevas ubicaciones',
      },
      view: {
        title: 'Ver ubicaciones',
      },
      importer: {
        title: 'Importar ubicaciones',
        fileName: 'Location_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
      downloads: {
        downloads: 'Descargas',
        label: 'Descargas',
        menu: 'Descargas',
      },
    },
    assets: {
      name: 'Bienes',
      label: 'Bienes',
      menu: 'Bienes',
      exporterFileName: 'Activos_exportados',
      list: {
        menu: 'Bienes',
        title: 'Bienes',
      },
      create: {
        success: 'Activos salvo com sucesso',
      },
      update: {
        success: 'Activos salvo com sucesso',
      },
      destroy: {
        success: 'Activos deletado com sucesso',
        destroyAll: {
          success: 'Activo (s) deletado com sucesso',
        },
      },
      edit: {
        title: 'Editar activos',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        name: 'Nombre',
        description: 'Descripción',
        refNum: 'RefNum',
        productType: 'Tipo de producto',
        documents: 'Documentos',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Activos Novo',
      },
      view: {
        title: 'Visualizar Activos',
      },
      importer: {
        title: 'Activos Importar',
        fileName: 'Assets_template_importacao',
        hint: 'Arquivos / Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
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
        orgPlantId: 'Planta',
        orgId: 'Organización',
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
      name: 'lOTOEntradas',
      label: 'Entradas de LOTO',
      menu: 'Entradas de LOTO',
      exporterFileName: 'lOTOTickets_export',
      list: {
        menu: 'Entradas de LOTO',
        title: 'Entradas de LOTO',
      },
      create: {
        success: 'LOTO Entradas guardados con éxito',
      },
      update: {
        success: 'LOTO Entradas guardados con éxito',
      },
      destroy: {
        success: 'LOTO Entradas eliminados con éxito',
        destroyAll: {
          success: 'Entradas de LOTO eliminados correctamente',
        },
      },
      edit: {
        title: 'Editar entradas de LOTO',
      },
      approve: {
        success: 'LOTO Ticket approved successfully??',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
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
        title: 'Nuevos entradas de LOTO',
      },
      view: {
        title: 'Ver entradas de LOTO',
      },
      importer: {
        title: 'Importar entradas de LOTO',
        fileName: 'lOTOEntradas_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
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
      label: 'Activo ArcFlash',
      menu: 'Activo ArcFlash',
      exporterFileName: 'arcFlashAssets_export',
      list: {
        menu: 'Activo ArcFlash',
        title: 'Activo ArcFlash',
      },
      create: {
        success: 'El activo de ArcFlash se guardó correctamente',
      },
      update: {
        success: 'El activo de ArcFlash se guardó correctamente',
      },
      destroy: {
        success: 'ArcFlash Asset eliminado correctamente',
        destroyAll: {
          success: 'Los activos de ArcFlash se eliminaron correctamente',
        },
      },
      edit: {
        title: 'Editar activo de ArcFlash',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subáreas',
        name: 'Nombre',
        description: 'Descripción',
        deviceId: 'Device ID??',
        deviceTypeId: 'Device Type??',
        afBoundary: 'Arc Flash Boundary??',
        shockHazard: 'Shock Hazard??',
        ppeCategory: 'PPE Category??',
        standardsOrg: 'Standards Organization??',
        upstreamIds: 'Upstream Assets??',
        incidentEnergy: 'Incident Energy??',
        productType: 'Tipo de producto',
        warningLabelImageUrl: 'Imagen de etiqueta de advertencia',
        limitedApproachBoundaryRange: 'Límite de aproximación limitada',
        limitedApproachBoundary: 'Límite de aproximación limitada',
        restrictedApproachBoundaryRange: 'Límite de acceso restringido',
        restrictedApproachBoundary: 'Límite de acceso restringido',
        prohibitedApproachBoundaryRange: 'Límite de acceso prohibido',
        prohibitedApproachBoundary: 'Límite de acceso prohibido',
        predictedArcingCurrentRange: 'Corriente de arco prevista',
        predictedArcingCurrent: 'Corriente de arco prevista',
        arcDurationRange: 'Duración del arco',
        arcDuration: 'Duración del arco',
        incidentEnergyRange: 'Energía incidente',
        ppeRequirementsFootHand: 'Requisitos de PPE Pie / Mano',
        ppeREquirementsEyeHead: 'Requisitos de EPP Ojo / Cabeza',
        ppeRequirementsBody: 'Organismo de requisitos de EPP',
        documents: 'Documentos',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
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
        isIsolation: 'IsIsolation??'
      },
      new: {
        title: 'Nuevo activo de ArcFlash',
      },
      view: {
        title: 'Ver activo de ArcFlash',
      },
      importer: {
        title: 'Importar activo de ArcFlash',
        fileName: 'arcFlashAssets_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
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
      name: 'arcFlashDeviceTypes',
      label: 'Tipos de dispositivo ArcFlash',
      menu: 'Tipos de dispositivo ArcFlash',
      exporterFileName: 'arcFlashDeviceTypes_export',
      list: {
        menu: 'Tipos de dispositivo ArcFlash',
        title: 'Tipos de dispositivo ArcFlash',
      },
      create: {
        success: 'Tipo de dispositivo ArcFlash guardado correctamente',
      },
      update: {
        success: 'Tipo de dispositivo ArcFlash guardado correctamente',
      },
      destroy: {
        success: 'Tipo de dispositivo ArcFlash eliminado correctamente',
        destroyAll: {
          success: 'Tipo (s) de dispositivo ArcFlash eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar tipo de dispositivo ArcFlash',
      },
      fields: {
        id: 'Carné de identidad',
        name: 'Nombre',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevo tipo de dispositivo ArcFlash',
      },
      view: {
        title: 'Ver tipo de dispositivo ArcFlash',
      },
      importer: {
        title: 'Importar tipos de dispositivo ArcFlash',
        fileName: 'arcFlashDeviceTypes_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    notificationGroups: {
      name: 'notificationGroups',
      label: 'Grupos de notificación',
      menu: 'Grupos de notificación',
      exporterFileName: 'notificationGroups_export',
      list: {
        menu: 'Grupos de notificación',
        title: 'Grupos de notificación',
      },
      create: {
        success: 'El grupo de notificación se guardó correctamente',
      },
      update: {
        success: 'El grupo de notificación se guardó correctamente',
      },
      destroy: {
        success: 'Grupo de notificación eliminado correctamente',
        destroyAll: {
          success: 'Grupos de notificación eliminados correctamente',
        },
      },
      edit: {
        title: 'Editar grupo de notificaciones',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        name: 'Nombre',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevo grupo de notificación',
      },
      view: {
        title: 'Ver grupo de notificaciones',
      },
      importer: {
        title: 'Importar grupos de notificación',
        fileName: 'notificationGroups_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    messagingGroups: {
      name: 'messagingGroups',
      label: 'Grupo de mensajería',
      menu: 'Grupo de mensajería',
      exporterFileName: 'messagingGroups_export',
      list: {
        menu: 'Grupo de mensajería',
        title: 'Grupo de mensajería',
      },
      create: {
        success: 'El grupo de mensajería se guardó correctamente',
      },
      update: {
        success: 'El grupo de mensajería se guardó correctamente',
      },
      destroy: {
        success: 'Grupo de mensajería eliminado correctamente',
        destroyAll: {
          success: 'Grupo (s) de mensajería eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar grupo de mensajería',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        name: 'Nombre',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        public: 'Público',
        persistent: 'Permanente',
      },
      new: {
        title: 'Nuevo grupo de mensajería',
      },
      view: {
        title: 'Ver grupo de mensajería',
      },
      importer: {
        title: 'Importar grupo de mensajería',
        fileName: 'messagingGroups_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    messagingGroupMembers: {
      name: 'messagingGroupMembers',
      label: 'Miembros del grupo de mensajería',
      menu: 'Miembros del grupo de mensajería',
      exporterFileName: 'messagingGroupMembers_export',
      list: {
        menu: 'Miembros del grupo de mensajería',
        title: 'Miembros del grupo de mensajería',
      },
      create: {
        success: 'Miembro del grupo de mensajería guardado correctamente',
      },
      update: {
        success: 'Miembro del grupo de mensajería guardado correctamente',
      },
      destroy: {
        success: 'Miembro del grupo de mensajería eliminado correctamente',
        destroyAll: {
          success: 'Miembro (s) del grupo de mensajería eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar miembro del grupo de mensajería',
      },
      fields: {
        id: 'Carné de identidad',
        groupId: 'ID de grupo de mensajería',
        userId: 'Usuario',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
      },
      new: {
        title: 'Nuevo miembro del grupo de mensajería',
      },
      view: {
        title: 'Ver miembro del grupo de mensajería',
      },
      importer: {
        title: 'Importar miembros del grupo de mensajería',
        fileName: 'messagingGroupMembers_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    chat: {
      name: 'charla',
      label: 'Charla',
      menu: 'Charla',
      title: 'Charla',
      permanent: 'Permanente',
      public: 'Público',
      editname: 'Editar',
      exitGroup: 'Grupo de salida',
      exporterFileName: 'chat_export',
      list: {
        menu: 'Charla',
        title: 'Charla',
      },
      create: {
        success: 'Chat guardado correctamente',
      },
      update: {
        success: 'Chat guardado correctamente',
      },
      destroy: {
        success: 'Chat eliminado correctamente',
        destroyAll: {
          success: 'Chat (s) eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar chat',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        orgSectionId: 'Sección',
        orgAreaId: 'Zona',
        orgSubAreaId: 'Subárea',
        groupId: 'Identificación del grupo',
        groupName: 'Nombre del grupo',
        userId: 'ID de usuario',
        message: 'Mensaje',
        files: 'Expediente',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        selectGroup: 'Por favor seleccione grupo',
        typeAMessage: 'Escribe un mensaje',
        searchForAChatGroup: 'Buscar un grupo de chat',
        newChatGroup: 'Nuevo grupo de chat',
        enterNewChatGroupName: 'Ingrese el nombre del grupo de chat.',
        chatGroupName: 'Nombre del grupo de chat:',
        persistent: 'Persistente',
        editChatGroup: 'Editar grupo de chat',
        groupImage: 'Cargar imagen de grupo',
        create: 'Crear',
        confirm: 'Confirmar',
        apply: 'Aplicar',
        sortBy: 'Ordenar por',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha final',
        dateAscending: 'Fecha ascendente',
        dateDescending: 'Fecha descendente',
        searchText: 'Buscar texto',
        inviteMembers: 'Invitar a los miembros',
        inviteorRemoveMembers: 'Invitar o eliminar miembros',
        joinThisGroupToSendMessage: 'Únete a este grupo para enviar un mensaje',
      },
      new: {
        title: 'Nueva conversación',
      },
      view: {
        title: 'Ver chat',
      },
      importer: {
        title: 'Importar chat',
        fileName: 'chat_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    employee: {
      name: 'empleado',
      label: 'Empleados',
      menu: 'Empleados',
      exporterFileName: 'empleado_exportación',
      list: {
        menu: 'Empleados',
        title: 'Empleados',
      },
      create: {
        success: 'Empleado guardado correctamente',
      },
      update: {
        success: 'Empleado guardado correctamente',
      },
      destroy: {
        success: 'Empleado eliminado correctamente',
        destroyAll: {
          success: 'Empleado (s) eliminado correctamente',
        },
      },
      edit: {
        title: 'Editar empleado',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        firstName: 'Nombre de pila',
        lastName: 'Apellido',
        directManager: 'Jefe directo',
        assetType: 'Tipo de activo',
        employeeType: 'Tipo de empleado',
        employeeNumber: 'Empleado #',
        title: 'Título',
        mainWorkArea: 'Área de trabajo principal',
        email: 'Email',
        state: 'Estado',
        action: 'Acción',
        avatar: 'Avatar',
        lastContactRange: 'Último contacto',
        lastContact: 'Último contacto',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        password: "Contraseña",
        createUser: "¿Crear usuario automáticamente?",
        phoneNumber: 'Telefone??',
        countryCode: 'Código de país??',
        roles: 'Papel',
        deviceType: 'Tipo de dispositivo',
        deviceTypeDesc: 'Tipo de dispositivo Descripción'
      },
      enumerators: {
        assetType: {
          Person: 'Persona',
        },
        employeeType: {
          Employee: 'Empleado',
          Contractor: 'Contratista',
          Visitor: 'Visitante'
        }
      },
      new: {
        title: 'Nuevo empleado',
      },
      view: {
        title: 'Ver empleado',
      },
      importer: {
        title: 'Importar empleados',
        fileName: 'employee_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    beacon: {
      name: 'Faro',
      label: 'Balizas',
      menu: 'Balizas',
      exporterFileName: 'beacon_export',
      list: {
        menu: 'Balizas',
        title: 'Balizas',
      },
      create: {
        success: 'Baliza guardada con éxito',
      },
      update: {
        success: 'Baliza guardada con éxito',
      },
      destroy: {
        success: 'Baliza eliminada correctamente',
        destroyAll: {
          success: 'Baliza (s) eliminada correctamente',
        },
      },
      edit: {
        title: 'Editar baliza',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        employeeId: 'Empleado',
        assetId: 'Asset',
        uUIDMinorRange: 'UUIDMinor',
        uUIDMinor: 'UUIDMinor',
        deviceTypeRange: 'Tipo de dispositivo',
        deviceType: 'Tipo de dispositivo',
        deviceTypeName: 'Nombre del tipo de dispositivo',
        deviceTypeDesc: 'Tipo de dispositivo Descripción',
        isProximityAlert: 'Es alerta de proximidad',
        minProximityMRange: 'MinProximityM',
        minProximityM: 'MinProximityM',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en',
        createdAtRange: 'Creado en',
        assigneeType: 'Tipo de cesionario',
        employeeType: 'Tipo de empleado',
        employeeNumber: 'Empleado #',
        isRegistered: "EstaRegistrado",
        isAssigned: "¿Es asignado?",
        serialNum: "Número de serie",
        trackingCode: "Codigo de localización",
        purchaseDate: "Fecha de compra",
        measuredPower: 'Potencia medida',
        measuredPowerHint: 'El valor predeterminado se establecerá si no se proporciona la entrada.',
        softwareUpdateStatus: 'Software Update Status??',
        sourceMac: 'Source Mac??',
        firmwareVersion: 'Firmware Version??',
        softwareVersion: 'Software Version??',
        settings: 'Settings??'
      },
      updateAvailable: 'Update available??',
      upToDate: 'Up to date??',
      new: {
        title: 'Nueva baliza',
      },
      view: {
        title: 'Ver baliza',
      },
      importer: {
        title: 'Importar balizas',
        fileName: 'beacon_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
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
      name: 'Firmware',
      label: 'Firmware',
      menu: 'Firmware',
      exporterFileName: 'firmware_export',
      list: {
        menu: 'Firmware',
        title: 'Firmware',
      },
      create: {
        success: 'Firmware guardada con éxito',
      },
      update: {
        success: 'Firmware guardada con éxito',
      },
      destroy: {
        success: 'Firmware eliminada correctamente',
        destroyAll: {
          success: 'Firmware (s) eliminada correctamente',
        },
      },
      edit: {
        title: 'Editar firmware',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        deviceTypeRange: 'Tipo de dispositivo',
        deviceType: 'Tipo de dispositivo',
        deviceTypeName: 'Nombre del tipo de dispositivo',
        deviceTypeDesc: 'Tipo de dispositivo Descripción',
        createdAt: 'Creado en',
        updatedAt: 'Actualizado en ',
        dateReleased: 'Fecha de publicación',
        firmwareVersion: 'Versión de firmware',
        softwareVersion: 'Versión del software',
        environmentVersion: 'Versión de entorno ',
        firmwareZip: 'Nombre de archivo de firmware Zip ',
        softwareZip: 'Nombre de archivo de software Zip ',
        environmentScriptZip: 'Entorno Script Zip ',
        orgDetails: 'Detalles de la organización'
      },
      new: {
        title: 'Nueva firmware',
      },
      view: {
        title: 'Ver firmware',
      },
      importer: {
        title: 'Importar firmware',
        fileName: 'firmware_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    masterEmailTemplate: {
      name: 'Plantilla maestra de correo electrónico',
      label: 'Plantilla maestra de correo electrónico',
      menu: 'Plantilla maestra de correo electrónico',
      exporterFileName: 'exportaciónDeLaPlantillaDeCorreoElectrónicoMaestro',
      list: {
        menu: 'Plantilla maestra de correo electrónico',
        title: 'Plantilla maestra de correo electrónico',
      },
      create: {
        success: 'Plantilla de correo electrónico maestra guardada correctamente',
      },
      update: {
        success: 'Plantilla de correo electrónico maestra guardada correctamente',
      },
      destroy: {
        success: 'Plantilla de correo electrónico maestra eliminada correctamente',
        destroyAll: {
          success: 'Las plantillas de correo electrónico maestras se eliminaron correctamente',
        },
      },
      edit: {
        title: 'Editar plantilla maestra de correo electrónico',
      },
      new: {
        title: 'Nueva plantilla maestra de correo electrónico',
      },
      view: {
        title: 'Ver plantilla maestra de correo electrónico',
      },
      enumerators: {
        templateType: {
          TemperatureTaken: 'Temperatura tomada',
          FailedAssessment: 'Evaluación fallida',
          CloseContact: 'Contacto cercano',
          HighConcentrationArea: 'Área de alta concentración',
          LotoLock: 'LOTO Lock??',
          LotoUnlock: 'LOTO Unlock??',
          ArcFlashAuditDue: 'Arc Flash Audit Due??'
        },
      },
    },
    emailTemplate: {
      name: 'Plantilla de correo electrónico',
      label: 'Plantilla de correo electrónico',
      menu: 'Plantilla de correo electrónico',
      exporterFileName: 'exportarPlantillaDeCorreoElectrónico',
      list: {
        menu: 'Plantilla de correo electrónico',
        title: 'Plantilla de correo electrónico',
      },
      create: {
        success: 'Plantilla de correo electrónico guardada correctamente',
      },
      update: {
        success: 'Plantilla de correo electrónico guardada correctamente',
      },
      destroy: {
        success: 'Plantilla de correo electrónico eliminada correctamente',
        destroyAll: {
          success: 'Plantilla (s) de correo electrónico eliminada correctamente',
        },
      },
      edit: {
        title: 'Editar plantilla de correo electrónico',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        name: 'Nombre',
        subject: 'Tema',
        body: 'Cuerpo',
        isEnabled: 'Estado',
        templateType: 'Tipo de plantilla',
        subjectLang: 'Tema({0})',
        bodyLang: 'Cuerpo({0})',
      },
      new: {
        title: 'Nueva plantilla de correo electrónico',
      },
      view: {
        title: 'Ver plantilla de correo electrónico',
      },
      disabled: 'Discapacitado',
      enabled: 'Habilitado',
      doDisableAllSuccess: 'Plantilla (s) deshabilitada correctamente',
      doEnableAllSuccess: 'Plantilla (s) habilitadas correctamente',
    },
    travelHistory: {
      name: 'Viaje',
      label: 'Viaje',
      menu: 'Viaje',
      exporterFileName: 'viajeHistoria_exportar ',
      list: {
        menu: 'Viaje',
        title: 'Viaje',
      },
      create: {
        success: 'Viaje guardado con éxito ',
      },
      update: {
        success: 'Viaje guardado con éxito ',
      },
      destroy: {
        success: 'Viaje eliminado correctamente ',
        destroyAll: {
          success: 'Viaje (s) eliminado correctamente ',
        },
      },
      edit: {
        title: 'Editar viaje ',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        employeeId: 'Empleado',
        travelType: 'Tipo de viaje ',
        destination: 'Destino',
        startTime: 'Hora de inicio',
        endTime: 'Hora de finalización',
        createdAtRange: 'fecha',
        duration: 'Duración',
        purpose: 'Propósito'
      },
      enumerators: {
        travelType: {
          international: 'Internacional',
          local: 'local'
        }
      },
      new: {
        title: 'Nuevo viaje ',
      },
      view: {
        title: 'Ver viaje ',
      },
      importer: {
        title: 'Importar viajes ',
        fileName: 'viaje_importar_modelo ',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio. ',
      },
    },
    testingHistory: {
      name: 'Pruebas',
      label: 'Pruebas',
      menu: 'Pruebas',
      exporterFileName: 'exportaciónDelHistorialDePruebas',
      list: {
        menu: 'Pruebas',
        title: 'Pruebas',
      },
      create: {
        success: 'Prueba guardada con éxito',
      },
      update: {
        success: 'Prueba guardada con éxito',
      },
      destroy: {
        success: 'Prueba eliminada correctamente',
        destroyAll: {
          success: 'Prueba (s) eliminada correctamente',
        },
      },
      edit: {
        title: 'Editar prueba',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        employeeId: 'Empleado',
        testType: 'Tipo de prueba',
        method: 'Método',
        reason: 'Razón',
        result: 'Resultado',
        testDate: 'Fecha y hora de la prueba'
      },
      enumerators: {
        testType: {
          express: 'Prueba rápida',
          lab: 'Prueba de laboratorio'
        },
        method: {
          swab: 'Hisopo',
          blood: 'Sangre',
          urine: 'Orina'
        },
        result: {
          pending: 'Pendiente',
          positive: 'Positivo',
          negative: 'Negativo'
        }
      },
      new: {
        title: 'Nueva prueba',
      },
      view: {
        title: 'Ver prueba',
      },
      importer: {
        title: 'Prueba de importación',
        fileName: 'pruebaDePlantillaDeImportación',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    vaccineHistory: {
      name: 'Vacuna',
      label: 'Vacuna',
      menu: 'Vacuna',
      exporterFileName: 'vacunaHistory_export',
      list: {
        menu: 'Vacuna',
        title: 'Vacuna',
      },
      create: {
        success: 'Vacuna guardada correctamente',
      },
      update: {
        success: 'Vacuna guardada correctamente',
      },
      destroy: {
        success: 'Vacuna eliminada correctamente',
        destroyAll: {
          success: 'Vacunas eliminadas correctamente',
        },
      },
      edit: {
        title: 'Editar vacuna',
      },
      fields: {
        id: 'Carné de identidad',
        orgId: 'Organización',
        orgPlantId: 'Planta',
        employeeId: 'Empleado',
        vaccineType: 'Tipo de vacuna',
        dateReceived: 'Fecha de recepción',
        immunityDuration: 'Duración esperada de inmunidad',
        expiryDate: 'Fecha de caducidad',
      },
      enumerators: {
        VaccineType: {
          express: 'Vacuna Express',
          lab: 'Vacuna de laboratorio'
        },
        method: {
          swab: 'Hisopo',
          blood: 'Sangre',
          urine: 'Orina'
        },
        result: {
          pending: 'Pendiente',
          positive: 'Positivo',
          negative: 'Negativo'
        }
      },
      new: {
        title: 'Nueva vacuna',
      },
      view: {
        title: 'Ver vacuna',
      },
      importer: {
        title: 'Importar vacuna',
        fileName: 'plantillaDeImportaciónDeVacunas',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio.',
      },
    },
    auth: {
      profile: {
        title: 'Editar Perfil??',
        success: 'Perfil atualizado com sucesso??',
        verifyCodeSuccess: 'Código verificado correctamente??',
        resendCodeSuccess: 'Código reenviado con éxito',
        verifyCodeError: 'Obtuve algún error al verificar el código??',
        resendCodeError: 'Obtuve algún error al volver a enviar el código',
        tokenInvalid: 'El token no es válido??',
        validationFailed: 'Validación fallida??'
      },
      createAnAccount: 'Criar uma conta??',
      rememberMe: 'Lembrar-me??',
      forgotPassword: 'Esqueci minha senha??',
      signin: 'Entrar??',
      signup: 'Registrar??',
      signout: 'Sair??',
      verifyCode: 'Código de verificación??',
      resendCode: 'Reenviar codigo??',
      alreadyHaveAnAccount: 'Já possui uma conta? Entre.??',
      signinWithAnotherAccount: 'Entrar com outra conta??',
      emailUnverified: {
        message: 'Confirme su correo electrónico en <strong> {0} </strong> para continuar.',
        submit: 'Reenviar verificación de correo electrónico',
      },
      emptyPermissions: {
        message: 'Aún no tienes permisos. Espere a que el administrador le otorgue privilegios.',
      },
      passwordResetEmail: {
        message: 'Enviar correo electrónico de restablecimiento de contraseña',
        error: 'Correo electrónico no reconocido',
      },
      passwordReset: {
        message: 'Restablecer la contraseña',
      },
      emailAddressVerificationEmail: {
        error: 'Correo electrónico no reconocido',
      },
      verificationEmailSuccess: 'Correo electrónico de verificación enviado correctamente',
      passwordResetEmailSuccess: 'Correo electrónico de restablecimiento de contraseña enviado correctamente',
      passwordResetSuccess: 'Contraseña cambiada con éxito',
      verifyEmail: {
        success: 'Correo electrónico verificado correctamente',
        message: 'Un momento, su correo electrónico está siendo verificado ...',
      },
    },
    roles: {
      owner: {
        label: 'Propietario',
        description: 'Acceso completo a todos los recursos',
      },
      orgAdmin: {
        label: 'Administrador de la organización',
        description: 'Ver solo paneles e informes de nivel de organización, páginas de administración de usuarios',
      },
      plantAdmin: {
        label: 'Administrador de planta',
        description: 'Ver todas las páginas con planta coincidente del usuario que inició sesión',
      },
      user: {
        label: 'Usuario',
        description: 'Sin acceso a la web, solo acceso a la aplicación de teléfono móvil',
      },
      security: {
        label: 'Seguridad',
        description: 'Ver las páginas de Security Gate, el historial de empleados, el aprovisionamiento de dispositivos, la ubicación interior / exterior y los paneles',
      },
      nurse: {
        label: 'enfermera',
        description: 'Ver las páginas de la estación de enfermería, el historial del empleado y los paneles',
      },
      manager: {
        label: 'Gerente',
        description: 'Ver vista de administrador, historial de empleados, ubicación interior / exterior, paneles de control e informes',
      },
      editor: {
        label: 'Editor',
        description: 'Editar acceso a todos los recursos',
      },
      viewer: {
        label: 'Espectador',
        description: 'Ver acceso a todos los recursos',
      },
      auditLogViewer: {
        label: 'Visor de registro de auditoría',
        description: 'Acceso para ver registros de auditoría',
      },
      iamSecurityReviewer: {
        label: 'Revisor de seguridad',
        description: 'Acceso completo para administrar roles de usuarios',
      },
      entityEditor: {
        label: 'Editor de entidades',
        description: 'Editar acceso a todas las entidades',
      },
      entityViewer: {
        label: 'Visor de entidades',
        description: 'Ver acceso a todas las entidades',
      },
      organizationsEditor: {
        label: 'Editor de organizaciones',
        description: 'Editar acceso a Organizaciones',
      },
      organizationsViewer: {
        label: 'Visor de organizaciones',
        description: 'Ver acceso a Organizaciones',
      },
      orgPlantsEditor: {
        label: 'Editor de Org Plants',
        description: 'Editar acceso a Org Plants',
      },
      orgPlantsViewer: {
        label: 'Visor de Org Plants',
        description: 'Ver acceso a Org Plants',
      },
      orgSectionsEditor: {
        label: 'Editor de secciones de organización',
        description: 'Editar acceso a OrgSections',
      },
      orgSectionsViewer: {
        label: 'Visor de secciones de organización',
        description: 'Ver acceso a OrgSections',
      },
      orgAreasEditor: {
        label: 'Editor de área',
        description: 'Editar acceso a áreas',
      },
      orgAreasViewer: {
        label: 'Visor de área',
        description: 'Ver acceso a áreas',
      },
      orgSubAreasEditor: {
        label: 'Editor de subárea',
        description: 'Editar acceso a subáreas',
      },
      orgSubAreasViewer: {
        label: 'Visor de subárea',
        description: 'Ver acceso a las subáreas',
      },
      documentEditor: {
        label: 'Editor de documentos',
        description: 'Editar acceso a documentos',
      },
      documentViewer: {
        label: 'Visor de documentos',
        description: 'Ver acceso a documentos',
      },
      assetEditor: {
        label: 'Editor de activos',
        description: 'Editar el acceso a los activos',
      },
      assetViewer: {
        label: 'Visor de activos',
        description: 'Ver acceso a activos',
      },
      pandemicAssessmentEditor: {
        label: 'Editor de evaluación de pandemias',
        description: 'Editar el acceso a las evaluaciones de pandemias',
      },
      pandemicAssessmentViewer: {
        label: 'Visor de evaluación de pandemias',
        description: 'Ver acceso a evaluaciones pandémicas',
      },
      pandemicTemperatureEditor: {
        label: 'Editor de temperatura pandémica',
        description: 'Editar acceso a temperaturas pandémicas',
      },
      pandemicTemperatureViewer: {
        label: 'Visor de temperatura pandémica',
        description: 'Ver acceso a temperaturas pandémicas',
      },
      pandemicCountryEditor: {
        label: 'Editor de países pandémicos',
        description: 'Editar acceso a países con pandemia',
      },
      pandemicCountryViewer: {
        label: 'Visor de países pandémicos',
        description: 'Ver acceso a países pandémicos',
      },
      pandemicCountryStatsEditor: {
        label: 'Editor de estadísticas de países pandémicos',
        description: 'Editar acceso a las estadísticas de países pandémicos',
      },
      pandemicCountryStatsViewer: {
        label: 'Visor de estadísticas de países pandémicos',
        description: 'Ver acceso a las estadísticas de países pandémicos',
      },
      locationsEditor: {
        label: 'Editor de ubicaciones',
        description: 'Editar acceso a Ubicaciones',
      },
      locationsViewer: {
        label: 'Visor de ubicaciones',
        description: 'Ver acceso a ubicaciones',
      },
      arcFlashAssetsEditor: {
        label: 'Editor de activos de ArcFlash',
        description: 'Editar acceso a ArcFlash Asset',
      },
      arcFlashAssetsViewer: {
        label: 'Visor de activos de ArcFlash',
        description: 'Ver acceso a ArcFlash Asset',
      },
      arcFlashProductTypesEditor: {
        label: 'Editor de tipo de producto ArcFlash',
        description: 'Editar acceso a tipos de productos ArcFlash',
      },
      arcFlashProductTypesViewer: {
        label: 'Visor de tipo de producto ArcFlash',
        description: 'Ver acceso a los tipos de productos de ArcFlash',
      },
      notificationGroupsEditor: {
        label: 'Editor de grupos de notificaciones',
        description: 'Editar acceso a grupos de notificación',
      },
      notificationGroupsViewer: {
        label: 'Visor de grupos de notificaciones',
        description: 'Ver acceso a grupos de notificación',
      },
      messagingGroupsEditor: {
        label: 'Editor de grupos de mensajería',
        description: 'Editar acceso al grupo de mensajería',
      },
      messagingGroupsViewer: {
        label: 'Visor de grupo de mensajería',
        description: 'Ver acceso al grupo de mensajería',
      },
      messagingGroupMembersEditor: {
        label: 'Editor de miembros del grupo de mensajería',
        description: 'Editar acceso a miembros del grupo de mensajería',
      },
      messagingGroupMembersViewer: {
        label: 'Visor de miembros del grupo de mensajería',
        description: 'Ver acceso a los miembros del grupo de mensajería',
      },
      chatEditor: {
        label: 'Editor de chat',
        description: 'Editar acceso al chat',
      },
      chatViewer: {
        label: 'Visor de chat',
        description: 'Ver acceso al chat',
      },
      beaconEditor: {
        label: 'Editor de balizas',
        description: 'Editar acceso a balizas',
      },
      beaconViewer: {
        label: 'Visor de balizas',
        description: 'Ver acceso a balizas',
      },
      employeeEditor: {
        label: 'Editor de empleados',
        description: 'Editar el acceso a los empleados',
      },
      employeeViewer: {
        label: 'Visor de empleados',
        description: 'Ver acceso a empleados',
      }
    },
    iam: {
      title: 'Gestión de identidad y acceso',
      menu: 'ESTOY',
      disable: 'Inhabilitar',
      disabled: 'Discapacitado',
      enabled: 'Habilitado',
      enable: 'Habilitar',
      doEnableSuccess: 'Usuario habilitado correctamente',
      doDisableSuccess: 'Usuario inhabilitado con éxito',
      doDisableAllSuccess: 'Usuario (s) desactivado correctamente',
      doEnableAllSuccess: 'Usuario (s) habilitado correctamente',
      doAddSuccess: 'Usuario (s) guardado correctamente',
      doUpdateSuccess: 'Usuario guardado correctamente',
      viewBy: 'Vista por',
      users: {
        name: 'usuarios',
        label: 'Usuarios',
        exporterFileName: 'users_export',
        doRemoveAllSelectedSuccess: 'Permisos eliminados con éxito',
      },
      roles: {
        label: 'Roles',
        doRemoveAllSelectedSuccess: 'Permisos eliminados con éxito',
      },
      edit: {
        title: 'editar usuario',
      },
      new: {
        title: 'Usuarios nuevos)',
        titleModal: 'Nuevo Usuario',
        emailsHint: 'Separe varias direcciones de correo electrónico con el carácter de coma.',
      },
      view: {
        title: 'Ver usuario',
        activity: 'Actividad',
      },
      importer: {
        title: 'Importar usuarios',
        fileName: 'users_import_template',
        hint: 'Las columnas Archivos / Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser el ID de los registros referenciados separados por espacio. Los roles deben ser los ID de rol separados por un espacio.',
      },
      errors: {
        userAlreadyExists: 'El usuario con este correo electrónico ya existe',
        userNotFound: 'Usuario no encontrado',
        disablingHimself: 'Usted puede',
        revokingOwnPermission: 'Usted puede',
      },
      destroy: {
        success: 'Usuario eliminado correctamente',
        destroyAll: {
          success: 'Usuario(s) eliminado correctamente',
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
      id: 'Id??',
      orgId: 'Organización',
      orgPlantId: 'Planta',
      authenticationUid: 'Id de autenticação??',
      avatars: 'Avatar??',
      email: 'Email??',
      emails: 'Email(s)??',
      employee: 'Empleado(s)??',
      fullName: 'Nome??',
      firstName: 'Nome??',
      lastName: 'Sobrenome??',
      status: 'Estado??',
      disabled: 'Desativado??',
      phoneNumber: 'Telefone??',
      countryCode: 'Código de país??',
      orgPlant: 'Planta??',
      employeeNum: 'Número de empleado??',
      orgPrefix: 'Código de organización??',
      role: 'Perfil??',
      createdAt: 'Criado em??',
      updatedAt: 'Atualizado em??',
      roleUser: 'Perfil/Usuário??',
      roles: 'Perfis??',
      createdAtRange: 'Criado em??',
      password: 'Senha??',
      rememberMe: 'Lembrar-me??',
      twoFactorEnabled: 'Habilitar 2FA??',
      verifyCode: 'Código??',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      email: 'El correo electrónico ${value} no es válido',
    },
  },
  geoSubSite: {
    fields: {
      locationName: 'Nombre del lugar',
      indoorMap: 'Imagen del piso',
      hasIndoorMap: 'Tiene un mapa interior',
      search: 'Dirección de búsqueda',
      latitude: 'Latitud',
      longitude: 'Longitud',
      floor: 'Piso#',
      maxOccupancy: 'Máxima Ocupacion',
      parentSubsite: 'Padre Subite',
      zoom: 'Enfocar',
      bearing: 'Llevando',
      pitch: 'Tono',
      entireArea: 'Área entera',
      subsite: 'subsitio',
      geofence: 'geofence',
    },
    messages: {
      addSuccess: 'Subsitio agregado exitosamente',
      editSuccess: 'Subsitio editado correctamente',
      addError: '¡Algo salió mal!',
      editError: '¡Se produjo un error durante la actualización!',
      saveError: '¡Dibuja geocercas antes de guardar datos!',
      saveErrorForSubsite: '¡Dibuja geocercas para la planta primero!',
      deleteSuccess: 'Subsitio eliminado con éxito',
      deleteError: '¡Se produjo un error al eliminar!',
      floorImageIsReq: 'Se requiere la imagen del piso',
      floorNumIsReq: 'Piso # es obligatorio',
      parentSubsiteIsReq: 'Se requiere el subsitio principal',
      noGeoFenceFound: '¡No se encontró ninguna geovalla!',
      addNewSubsite: 'Agregar nuevo subsitio',
      actionMenu: 'Menú de acción',
      editGeoFence: 'Editar geovalla',
      editSubsite: 'Editar subsitio',
      typeNameForThisLocation: 'Escriba un nombre para esta ubicación. Una vez completado, se le pondrá en modo de edición para que pueda buscar una ubicación y desplazarse, hacer zoom y rotar hasta que tenga la vista de la forma que desee.',
      editlocation: 'Aquí puede editar los detalles de la ubicación seleccionada',
      createNew: 'Crear nuevo',
      location: 'Ubicación',
      searchlocation: 'Ubicación de búsqueda',
      searchlocationmessage: 'Puede buscar una ubicación utilizando',
      name: 'Nombre',
      coordinates: 'Coordenadas',
      loading: 'Cargando',
    },
    geoFenceArea: 'AREA GEO CERCA',
    geoFenceCoordinates: 'Coordenadas de geo cerca',
  },
  geoRooms: {
    addRoom: 'Add Room??',
    editRoom: 'Edit Room??',
    fields: {
      roomName: 'Nombre de la habitación',
    },
    messages: {
      addSuccess: 'Habitación agregada con éxito',
      editSuccess: 'Habitación editada correctamente',
      saveSuccess: 'Guardado exitosamente',
      deleteSuccess: 'Éxito eliminado',
      error: 'Algo salió mal',
      deleteError: 'Algo salió mal al eliminar',
      saveError: 'Dibuja un polígono antes de guardar',
      notFound: '¡No se encontraron GeoRooms!',
    },
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    view: 'Audit Logs ver',
    exporterFileName: 'audit_log_export',
    entityNamesHint: 'Separe varias entidades usando el carácter de coma.',
    fields: {
      id: 'Carné de identidad',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  errorLog: {
    menu: 'Registros de errores',
    title: 'Registros de errores',
    view: 'Registros de errores ver',
    exporterFileName: 'error_log_export',
    entityNamesHint: 'Separe varias entidades usando el carácter de coma.',
    fields: {
      id: 'Carné de identidad',
      orgId: 'Organización',
      orgPlantId: 'Planta',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      description: 'Descripción',
      method: 'Método',
      values: 'Valores',
      timestamp: 'Fecha',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success: 'Configuración guardada correctamente. La página se recargará en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      shade: 'Sombra',
    },
  },
  arcFlash: {
    title: 'Arc Flash??',
    menu: 'Arc Flash??',
    subMenu: {
      assets: 'Assets??',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      shade: 'Sombra',
    },
    view: {
      title: 'ArcFlash View??',
      label: 'Label??',
      qrCode: 'QR Code??',
      apiError: 'Got an error while loading warning image. Please reload your page.??'
    },
  },
  home: {
    menu: 'Hogar',
    message: 'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend / view / home / HomePage.js.',
    realtimeMapping: 'Mapeo en tiempo real',
    analytics: 'Analítica',
    managementReports: 'Informes de gestión',
    charts: {
      day: 'Día',
      red: 'rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'naranja',
      months: {
        1: 'enero',
        2: 'febrero',
        3: 'marzo',
        4: 'abril',
        5: 'Mayo',
        6: 'junio',
        7: 'julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormido',
      designing: 'Diseño',
      coding: 'Codificación',
      cycling: 'Ciclismo',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'De vuelta a casa',
    403: 'Lo siento, no tienes acceso a esta pagina',
    404: 'Lo sentimos, la página que visitaste no existe',
    500: 'Lo sentimos, el servidor informa un error',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${ruta} es obligatorio',
      oneOf: '${ruta} debe ser uno de los siguientes valores: ${valores}',
      notOneOf: '${ruta} no debe ser uno de los siguientes valores: ${valores}',
    },
    string: {
      length: '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max: '${path} debe tener como máximo ${max} caracteres',
      matches: '${ruta} debe coincidir con lo siguiente: "${regex}"',
      email: '${path} debe ser un correo electrónico válido',
      url: '${ruta} debe ser una URL válida',
      trim: '${ruta} debe ser una cadena recortada',
      lowercase: '${ruta} debe ser una cadena en minúsculas',
      uppercase: '${ruta} debe ser una cadena en mayúsculas',
      selected: '${ruta} debe seleccionarse',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${ruta} no debe ser igual a ${notEqual}',
      positive: '${ruta} debe ser un número positivo',
      negative: '${ruta} debe ser un número negativo',
      integer: '${ruta} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    object: {
      noUnknown: 'El campo ${ruta} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: 'El campo ${path} debe tener al menos ${min} elementos',
      max: 'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size: 'El archivo es demasiado grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage: 'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success: 'Importación completada. Todas las filas se importaron correctamente.',
      someErrors: 'Se completó el procesamiento, pero no se pudieron importar algunas filas.',
      allErrors: 'Falló la importación. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descarga la plantilla',
      hint: 'Haga clic o arrastre el archivo a esta área para continuar',
    },
    list: {
      discardConfirm: '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel: 'Solo se permiten archivos de Excel (.xlsx)',
      invalidFileUpload: 'Archivo inválido. Asegúrese de que está utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere importar hash',
      importHashExistent: 'Los datos ya se han importado',
    },
  },
  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  body: {
    emptyDataSourceMessage: 'No hay registros que mostrar',
    editRow: {
      deleteText: '¿Está seguro de eliminar esta fila?',
    },
  },
  grouping: {
    placeholder: 'Arrastrar encabezados ...',
    groupedBy: 'Agrupados por:',
  },
  header: {
    actions: 'Comportamiento',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelDisplayedRowsCustom: '{from}-{to} de {count}',
    labelRowsPerPage: 'Por página:',
    labelRowsSelect: 'Filas',
    firstAriaLabel: 'Primera página',
    previousAriaLabel: 'Pagina anterior',
    nextAriaLabel: 'Siguiente página',
    lastAriaLabel: 'Última página',
  },
  toolbar: {
    toolbar: 'Agregar o quitar columnas',
    nRowsSelected: '{0} filas seleccionadas',
    showColumnsTitle: 'Mostrar columnas',
    exportTitle: 'Exportar',
    exportCSVName: 'Exportar como CSV',
    exportPDFName: 'Exportar como PDF',
    searchTooltip: 'Buscar',
  },
  insights: {
    menu: "Percepciones"
  },
  devices: {
    menu: "Dispositivos"
  },
  dataEntry: {
    menu: "Entrada de datos"
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

export default es;
