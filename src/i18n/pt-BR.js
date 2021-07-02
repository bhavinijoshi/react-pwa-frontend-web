const ptBR = {
  common: {
    viewOnMap: 'View On Map??',
    viewLabel: 'View Label??',
    viewDoc: 'View Document??',
    ViewProcedure: 'View Procedure??',
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Redefinir',
    save: 'Salve ',
    search: 'Procurar',
    edit: 'Editar',
    quickEdit: 'Edição rápida',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Sem dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'sim',
    no: 'Não',
    pause: 'Pausa',
    areYouSure: 'Você tem certeza?',
    view: 'Visão',
    destroy: 'Excluir',
    mustSelectARow: 'Deve selecionar uma linha',
    start: 'Começar',
    end: 'Fim',
    copy: 'Copiado para a área de transferência',
    discardEdit: 'Descartar edição',
    percent: 'Por cento',
    add: 'ADICIONAR',
    hide: 'ocultar',
    show: 'mostrar',
    delete: 'Excluir',
    startDate: 'Data de início',
    endDate: 'Data final',
    invalidDate: 'Data inválida',
    indoor: 'Interior',
    outdoor: 'Ao ar livre',
    reload: 'Recarregar',
    tooltips: {
      employeeInfo: 'Informações do funcionário',
      employee: 'Empregado',
      copyData: 'Copiar Dados'
    },
    associatedDataConfirmModal: 'Você deseja excluir todos os dados associados ao (s) usuário (s)',
    roleNotAllowed: 'Você não pode editar / excluir alguém com uma função superior a você.',
    apiError: 'Algo deu errado!',
    errors: {
      employeeFetchError: 'Falha ao buscar funcionários, tente novamente mais tarde! ',
      assetFetchError: 'Falha ao buscar recursos, tente novamente mais tarde! ',
      subsiteFetchError: 'Falha ao buscar subsites. Tente novamente mais tarde! '
    },
    autoComplete: {
      employee: 'Empregado',
      asset: 'De ativos'
    },
    done: 'Feito',
    saveAndProceed: 'Salvar e prosseguir',
    replace: 'Substituir',
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
      label: 'Provisionamento de dispositivos',
      menu: 'Provisionamento de dispositivos',
      list: {
        menu: 'Provisionamento de dispositivos',
        title: 'Provisionamento de dispositivos',
      },
      create: {
        success: 'Provisionamento de dispositivo salvo com sucesso',
      },
      enumerators: {
        assigneeType: {
          Asset: 'De ativos',
        },
        employeeType: {
          Contractor: 'Contratante',
          Visitor: 'Visitante',
        },
      },
    },
    reportsCanned: {
      name: 'reportsCanned',
      label: 'Relatórios Canned',
      menu: 'Relatórios Canned',
      selectAReportToRun: 'Selecione um relatório para executar',
      selectOrgPlant: 'Selecione Org Plant',
      selectTicketStatus: 'Select Ticket Status??',
      view: {
        title: 'Relatórios Canned',
        totalCloseContactByArea: 'Total de contatos fechados por área',
        totalCloseContactByEmployee: 'Total de contatos fechados por funcionário',
        totalGeoFenceStatusPerEmployeeByDay: 'Status total da cerca geográfica para funcionários por dia',
        employeeHealthStatus: 'Status de saúde do funcionário',
        employeesHealthScores: 'Pontuação de saúde dos funcionários',
        arcFlashDueForRenewal: 'Arc Flash Due For Renewal??',
        arcFlashReviewsExpiringIn90Days: 'Arc Flash Audit Reviews Expiring In Next 90 Days??',
        lotoTickets: "LOTO - Tickets??",
        lotoCurrentLocks: "LOTO - Current Locks??",
        lotoRecentRemovedLocks: "LOTO – Recent Removed Locks??"
      },
      columns: {
        numOfCloseContacts: '# Fechar contatos',
        area: 'Área',
        lastContact: 'Último contato',
        peopleView: 'Visualização de pessoas',
        employeeNum: 'Empregado #',
        date: 'Encontro',
        totalEmployees: 'Funcionários totais',
        totalOnSite: 'Total no local',
        totalOffSite: 'Total fora do local',
        totalUnknown: 'Total Desconhecido',
        plant: 'Plantar',
        name: 'Nome',
        healthStatus: 'Estado de saúde',
        lastUpdatedAt: 'Última atualização em',
        healthScore: 'Pontuação de saúde',
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
      menu: 'Painel de controle'
    },
    organizations: {
      name: 'organizações',
      label: 'Organizações',
      menu: 'Organizações',
      exporterFileName: 'organizações_exportar',
      list: {
        menu: 'Organizações',
        title: 'Organizações',
      },
      create: {
        success: 'Organizações salvas com sucesso',
      },
      update: {
        success: 'Organizações salvas com sucesso',
      },
      destroy: {
        success: 'Organizações excluídas com sucesso',
        destroyAll: {
          success: 'Organizações excluídas com sucesso',
        },
      },
      edit: {
        title: 'Editar Organizações',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        healthPolicyUrl: 'Polícia da saúde URL',
        urlShortCode: 'Código Curto de URL',
        orgPrefix: 'Prefixo Org',
        primaryContactName: 'Nome do contato principal',
        primaryContactEmail: 'Email do contato principal',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novas Organizações',
      },
      view: {
        title: 'Ver Organizações',
      },
      importer: {
        title: 'Organizações de importação',
        fileName: 'organization_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
        success: 'Org Plants salvos com sucesso',
      },
      update: {
        success: 'Org Plants salvos com sucesso',
        error: 'Algo deu errado!',
      },
      destroy: {
        success: 'Org Plants excluídos com sucesso',
        destroyAll: {
          success: 'Org Plants (s) excluídos com sucesso',
        },
      },
      edit: {
        title: 'Editar Org Plants',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        primaryContactName: 'Nome do contato principal',
        primaryContactEmail: 'Email do contato principal',
        orgId: 'Organização',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
        maxOccupancy: 'Ocupação Maxima',
        urlShortCode: 'Código Curto de URL',
        enableBLEServices: 'Habilitar serviços BLE',
        enableArcFlash: 'Habilitar Arc Flash',
        enablePandemic: 'Habilitar Pandemia',
        enableLOTO: 'Habilitar LOTO',
        gatewayPingIPAddress: 'Gateway Ping IPAddress',
        arcFlashStandardsOrg: 'Organização de padrões do Arc Flash',
        requireLOTOTicketToLock: 'LOTO locking requires Scheduled Ticket??'
      },
      new: {
        title: 'Novos Org Plants',
      },
      view: {
        title: 'Ver Org Plants',
      },
      importer: {
        title: 'Importar Org Plants',
        fileName: 'orgPlants_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    orgHierarchy: {
      name: 'orgHierarchy',
      label: 'Hierarquia da Organização',
      menu: 'Hierarquia da Organização',
      exporterFileName: 'orgHierarchy_export',
      searchMode: 'Modo de pesquisa',
      orgHierarchyDelete: 'Excluir OrgHierarchy',
      deleting: 'Excluindo',
      primaryContactName: 'Nome do contato principal',
      primaryContactEmail: 'Email do contato principal',
      urlShortCode: 'Código Curto de URL',
      orgHierarchy: 'OrgHierarchy',
      editing: 'Editando',
      adding: 'Adicionando',
      under: 'Debaixo',
      deleteItem: 'Excluir item',
      editItem: 'Editar item',
      addPlant: 'Adicionar Site',
      configureGeoFence: 'Configurar Geo Fence',
      addSection: 'Adicionar Seção',
      addArea: 'Adicionar área',
      addSubArea: 'Adicionar SubArea',
      contains: 'Contém',
      Startswith: 'Começa com',
      maxOccupancy: 'Ocupação Maxima',
      list: {
        menu: 'OrgHierarchy',
        title: 'Hierarquia organizacional',
      },
      create: {
        success: 'OrgHierarchy salvo com sucesso',
      },
      update: {
        success: 'OrgHierarchy salvo com sucesso',
      },
      destroy: {
        success: 'OrgHierarchy excluída com sucesso',
        destroyAll: {
          success: 'OrgHierarquia (s) excluída (s) com sucesso',
        },
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        orgId: 'Organização',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Nova Hierarquia Org',
      },
      view: {
        title: 'Exibir hierarquia organizacional',
      },
      importer: {
        title: 'Importar hierarquia organizacional',
        fileName: 'orgHierarchy_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
        success: 'Seções da organização salvas com sucesso',
      },
      update: {
        success: 'Seções da organização salvas com sucesso',
      },
      destroy: {
        success: 'Seções da organização excluídas com sucesso',
        destroyAll: {
          success: 'Seções da organização excluídas com sucesso',
        },
      },
      edit: {
        title: 'Editar Seções de Organização',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novas Seções de Organização',
      },
      view: {
        title: 'Ver Seções da Organização',
      },
      importer: {
        title: 'Importar OrgSections',
        fileName: 'orgSections_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    orgAreas: {
      name: 'orgAreas',
      label: 'Áreas',
      menu: 'Áreas',
      exporterFileName: 'orgAreas_export',
      list: {
        menu: 'Áreas',
        title: 'Áreas',
      },
      create: {
        success: 'Área salva com sucesso',
      },
      update: {
        success: 'Área salva com sucesso',
      },
      destroy: {
        success: 'Área excluída com sucesso',
        destroyAll: {
          success: 'Área (s) excluída (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Área',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Nova área',
      },
      view: {
        title: 'Ver área',
      },
      importer: {
        title: 'Áreas de Importação',
        fileName: 'orgAreas_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
        success: 'Subárea salva com sucesso',
      },
      update: {
        success: 'Subárea salva com sucesso',
      },
      destroy: {
        success: 'Subárea excluída com sucesso',
        destroyAll: {
          success: 'Subárea (s) excluída (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Subárea',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Nova Subárea',
      },
      view: {
        title: 'Ver Subárea',
      },
      importer: {
        title: 'Importar subáreas',
        fileName: 'orgSubAreas_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    peopleView: {
      name: 'Visualização de pessoas',
      label: 'Visualização de pessoas',
      menu: 'Visualização de pessoas',
      contactOccurencesbyDay: 'Contato Ocorrências por dia',
      contactOccurences: 'Ocorrências de contato',
      healthMonitoring: 'Monitoramento de Saúde',
      ambitentTemperature: 'Temperatura Ambitente',
      temperature: 'Temperatura',
      heartRate: 'Frequência cardíaca',
      ambitentTemperatureC: 'Temperatura Ambitente ° C',
      temperatureC: 'Temperatura °C',
      heartRatebeatsPermin: 'Batimentos cardíacos / min',
      employeeStatistics: 'Selecione um funcionário para ver as estatísticas',
      columns: {
        employeeNum: 'Empregado#',
        name: 'Nome',
        location: 'Localização',
        timeContacted: 'Tempo de contato',
        gpsLatitude: 'Latitude GPS',
        gpsLongitude: 'Longitude GPS',
        indoorXCoordinate: 'Coordenada X interna',
        indoorYCoordinate: 'Coordenada Y interna',
        geoSubsiteName: 'Nome do subsite geográfico',
        crossingDate: 'Data de Cruzamento',
        status: 'Status',
        timeRecorded: 'Tempo registrado',
      },
      tooltip: {
        openCalendarView: 'Abra a visualização do calendário'
      },
      today: 'Hoje',
      assessments: 'Avaliações de Saúde',
      contactHistory: 'Histórico de contato',
      movementHistory: 'História do Movimento',
      geofenceCrossings: 'Geofence Crossings',
      firstGenContacts: 'Contatos da primeira geração',
      secondGenContacts: 'Contatos da 2ª Geração',
      thirdGenContacts: 'Contatos de 3ª geração',
      travelHistory: 'Viagem',
      testingHistory: 'Testes',
      vaccineHistory: 'História da Vacina',
      movements: 'Movimentos',
      details: 'Detalhes',
      peopleHistoricalInformation: 'Informações Históricas do Povo',
      searchEmployee: 'Empregado de Pesquisa',
      filter: 'Filtro',
      moreInfo: 'Mais informações',
      infoBody: {
        testType: 'Tipo de Teste',
        method: 'Método',
        result: 'Resultado',
        count: 'Contar',
        destination: 'Destino',
        travelType: 'Tipo de Viagem',
        vaccineType: 'Tipo de Vacina',
        express: 'Teste expresso',
        lab: 'Teste de laboratório',
        swab: 'Cotonete',
        blood: 'Sangue',
        urine: 'Urina',
        pending: 'Pendente',
        positive: 'Positivo',
        negative: 'Negativo',
        international: 'Internacional',
        local: 'local',
      },
      warningMovementHistory: 'A maximum of 2500 records was loaded for movement history, please consider filtering using the date pickers.??',
      warningHealthMonitoring: 'A maximum of 2500 records was loaded for health monitoring, please consider filtering using the date pickers.??'
    },
    securityGate: {
      name: 'Portão de segurança',
      label: 'Portão de segurança',
      menu: 'Portão de segurança',
      employeeHealthHistoryLast14Days: 'Histórico de saúde do funcionário nos últimos 14 dias',
      temperature: 'Temperatura',
      time: 'Tempo',
      temperatureC: 'Temperatura ° C',
      columns: {
        lastName: 'Último nome',
        firstName: 'Primeiro nome',
        status: 'Status',
        startDate: 'Data de início',
        endDate: 'Data final',
        daysRemaining: 'Dias restantes',
        timeOnSite: 'Tempo no local',
        minutesElapsed: 'Minutos Decorridos',
        timeRecorded: 'Tempo registrado',
        ambitentTemperatureC: 'Temperatura Ambitente ° C',
        temperatureC: 'Temperatura °C',
        heartRatebeatsPermin: 'Batimentos cardíacos / min',
      },
      messages: {
        saveSuccess: 'Salvo com sucesso',
        saveError: 'Algo deu errado!',
        ok: 'Está bem',
        fail: 'Falhou!',
      },
      employeeInfotab: {
        name: 'Nome',
        employeeNum: 'Empregado#',
        title: 'Título',
        currentAction: 'Ação Atual',
        status: 'Status',
        healthStatus: 'Estado de saúde',
        building: 'Construção',
        gpsLatitude: 'Latitude GPS',
        gpsLongitude: 'Longitude GPS',
        gpsBearing: 'Rolamento GPS',
        gpsSpeed: 'Velocidade GPS',
        gpsAltitude: 'Altitude GPS',
        indoorXCoordinate: 'Coordenada X interna',
        indoorYCoordinate: 'Coordenada Y interna',
        lastReport: 'Último Relatório',
        viewCurrentLocation: 'Ver localização atual',
        currentLocation: 'Current Location??',
        beacon: 'baliza'
      },
      foundSomeError: 'encontrou algum erro!',
      searchEmployee: 'Empregado de Pesquisa',
      filter: 'Filtro',
      readBluetooth: 'Leia Bluetooth',
      readQRCode: 'Leia o código QR',
      takeTemperature: 'Tomar a temperatura',
      quarantine: 'Quarentena',
      unquarantine: 'Unquarantine',
      pleaseselectAnEmployeeToSeeStatistics: 'Selecione um funcionário para ver as estatísticas',
      needsTemperature: 'Temperatura necessária',
      quarantineList: 'Lista de Quarentena',
    },
    qrcodeReader: {
      healthPass: 'Passe de saúde',
      displayHealthPass: 'Exiba o código QR do seu Health Pass',
      matchFound: 'Combinação encontrada',
      matchNotFound: 'Correspondência não encontrada',
    },
    nurseStation: {
      name: 'Enfermaria',
      label: 'Enfermaria',
      menu: 'Enfermaria',
      employeeHealthHistoryLast14Days: 'Histórico de saúde do funcionário nos últimos 14 dias',
      temperature: 'Temperatura',
      time: 'Tempo',
      temperatureC: 'Temperatura ° C',
      filter: 'Filtro',
      reason: 'Razão',
      quarantineLocations: {
        label: 'Selecione um local de quarentena',
        site: 'Local',
        home: 'Casa',
        hotel: 'hotel'
      },
      columns: {
        timeRecorded: 'Tempo registrado',
        ambitentTemperatureC: 'Temperatura Ambitente ° C',
        temperatureC: 'Temperatura °C',
        heartRatebeatsPermin: 'Batimentos cardíacos / min',
        lastName: 'Último nome',
        firstName: 'Primeiro nome',
        status: 'Status',
        startDate: 'Data de início',
        endDate: 'Data final',
        daysRemaining: 'Dias restantes',
        timeOnSite: 'Tempo no local',
        minutesElapsed: 'Minutos Decorridos',
        assessmentDate: 'Data de Avaliação',
        type: 'Tipo',
      },
      messages: {
        saveSuccess: 'Salvo com sucesso',
        saveError: 'Algo deu errado!',
        ok: 'Está bem',
        fail: 'Falhou!',
        gotHere: 'cheguei aqui, depurando por que as chamadas subsequentes para connectBLEDevice quando clicadas não chegam aqui.',
        connect: 'CONECTAR',
        connecting: 'CONECTANDO ...',
        qrError: 'FORMATO QR INVÁLIDO!',
      },
      foundsomeerror: 'encontrou algum erro',
      readBluetooth: 'Leia Bluetooth',
      readQRCode: 'Leia o código QR',
      takeTemperature: 'Tomar a temperatura',
      beginHealthAssessment: 'Comece a avaliação de saúde',
      quarantine: 'Quarentena',
      unquarantine: 'Unquarantine',
      pleaseSelectanEmployeeToSeeStatistics: 'Selecione um funcionário para ver as estatísticas',
      assessments: 'Assessments',
      needsTemperature: 'Temperatura necessária',
      quarantineList: 'Lista de Quarentena',
      assesmentModal: {
        healthAssessment: 'Avaliação da saúde',
        name: 'Nome',
        symptoms: 'Sintomas',
        healthStatus: 'Estado de saúde',
      },
      HealthAssesment: {
        Assesmentsave: 'Avaliação salva com sucesso',
        somethingWentWrong: 'Algo deu errado',
        healthAssessment: 'Avaliação da saúde',
        healthAssessmentEmployee: 'Preencha a avaliação de saúde deste funcionário',
        pickOne: 'Escolha um',
        selectHealthStatus: 'Selecione o estado de saúde',
        startDate: 'Data de início',
        endDate: 'Data final',
      },
      onsite: 'No local',
      offsite: 'Fora do local'
    },
    managerView: {
      name: 'Visão do gerente',
      label: 'Visão do gerente',
      menu: 'Visão do gerente',
      assessment: {
        fever: 'Febre',
        tiredness: 'Cansaço',
        dryCough: 'Tosse seca',
        achesAndPains: 'Dores e dores',
        nasalCongestion: 'Congestão nasal',
        runnyNose: 'Nariz a pingar',
        soreThroat: 'Dor de garganta',
        diarrhea: 'Diarréia',
        difficultyBreathing: 'Dificuldade para respirar',
        travelledRecently: 'Viajou recentemente',
        past14DaysHistory: 'Você viajou nos últimos 14 dias',
        next14DaysHisto: 'Você planeja viajar nos próximos 14 dias',
        exposedToPositivePerson: 'Exposto a pessoa positiva',
        testedPositiveForCovid19: 'Teste positivo para Covid-19',
        testedNegativeForCovid19: 'Teste negativo para Covid-19',
        vaccinatedForCovid19: 'Vacinado para Covid-19',
      },
      columns: {
        employeeNum: 'Empregado#',
        name: 'Nome',
        location: 'Localização',
        timeContacted: 'Tempo de contato',
        gpsLatitude: 'Latitude GPS',
        gpsLongitude: 'Longitude GPS',
        indoorXCoordinate: 'Coordenada X interna',
        indoorYCoordinate: 'Coordenada Y interna',
        geoSubsiteName: 'Nome do subsite geográfico',
        crossingDate: 'Data de Cruzamento',
        status: 'Status',
        timeRecorded: 'Tempo registrado',
        lastName: 'Último nome',
        firstName: 'Primeiro nome',
        startDate: 'Data de início',
        endDate: 'Data final',
        daysRemaining: 'Dias restantes',
        timeOnSite: 'Tempo no local',
        minutesElapsed: 'Minutos Decorridos',
        documentName: 'Nome do Documento',
        hierarchy: 'Hierarquia',
        version: 'Versão',
        lastUpdated: 'Ultima atualização',
        lastUpdatedBy: 'Última atualização por',
        type: 'Tipo',
        assessmentDate: 'Data de Avaliação',
      },
      chartComboHealthStatus: {
        weeklyEmployeeSymptomsVsCloseContacts: 'Sintomas semanais do funcionário vs. contatos próximos',
        week: 'Semana',
        numOfDay: 'número de empregados',
        reportedSymptomatic: 'Sintomático relatado',
        closeContactOccurences: 'Fechar ocorrências de contato',
      },
      stats: 'Estatísticas',
      needsTemperature: 'Temperatura necessária',
      assessmentFailures: 'Falhas de avaliação',
      quarantineList: 'Lista de Quarentena',
      protocols: 'Protocolos',
    },
    selfAssessment: {
      menu: 'Autoavaliação',
      pageTitle: 'Auto-avaliação',
      title: 'Avaliações anteriores',
      healthStatus: "EstadoDe Saúde",
      cardTitle: "Última autoavaliação",
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
      additionalInfo: "Informação Adicional",
      quarantineLocation: "Local de quarentena",
      quarantineLocationDescription: "Escolha o local de quarentena de sua preferência",
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
      name: 'Painel de rastreamento de contatos',
      label: 'Painel de rastreamento de contatos',
      menu: 'Painel de rastreamento de contatos',
      charts: {
        day: 'Dia',
        months: {
          1: 'janeiro',
          2: 'fevereiro',
          3: 'Março',
          4: 'abril',
          5: 'Posso',
          6: 'Junho',
          7: 'Julho',
        },
        onsite: 'No local',
        offsite: 'Fora do local',
        unknown: 'Desconhecido',
        totalNumOfContactsPerDay: 'Nº total de contatos fechados por dia',
        numOfCloseContactsOccurancePerDay: '# Fechar ocorrências de contato / dia',
        totalNumOfContactsPerWeek: 'Nº total de contatos fechados por semana',
        numOfCloseContactsOccurancePerWeek: '# Fechar ocorrências de contato / semana',
        areaWithHighestRateOfCloseContact: 'Áreas com a maior taxa de contato próximo',
        numberOfOccurances: 'Número de Ocorrências',
        siteArea: 'Área do site',
        employeeWithHighestRateOfCloseContact: 'Funcionários com a maior taxa de contato próximo',
        totalEmployeeGeoFenceStatusLast7Days: 'Status total da cerca geográfica do funcionário nos últimos 7 dias',
      },
      reportHeader: {
        employeeGeoFenceStatusMTD: 'Status MTD da cerca geográfica do funcionário',
        employeeGeoFenceStatusToday: 'Status da cerca geográfica do funcionário hoje',
      },
    },
    dashboardEmployeeHealth: {
      name: 'Painel de Saúde do Funcionário',
      label: 'Painel de Saúde do Funcionário',
      menu: 'Painel de Saúde do Funcionário',
      charts: {
        day: 'Dia',
        months: {
          1: 'janeiro',
          2: 'fevereiro',
          3: 'Março',
          4: 'abril',
          5: 'Posso',
          6: 'Junho',
          7: 'Julho',
        },
        weeklyEmployeeSymptonsVsCloseContacts: 'Sintomas semanais do funcionário vs. contatos próximos',
        week: 'Semana',
        numOfDay: 'número de empregados',
        reportedSymptomatic: 'Sintomático relatado',
        closeContactOccurences: 'Fechar ocorrências de contato',
        topWorkAreaswithSymptomaticEmployees: 'Principais áreas de trabalho com funcionários sintomáticos',
        numberOfEmployeesSymptomatic: 'Número de funcionários sintomáticos',
        siteOrArea: 'Área do site',
        employeeHealthStatistics: 'Estatísticas de saúde do funcionário',
        averageEmployeeTemperaturelast14Days: 'Temperatura Média do Funcionário',
        noIssues: 'Sem problemas',
        closeContact: 'Contato próximo',
        symptomatic: 'Sintomático',
        confirmed: 'Confirmado',
        recovered: 'Recuperado',
        deaths: 'Mortes',
      },
    },
    dashboardHardwareHealth: {
      name: 'Hardware Dashboard??',
      label: 'Hardware Dashboard??',
      menu: 'Hardware Dashboard??',
      mtd: 'Month to Date??',
      daily: 'Daily',
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
      name: 'Configurar cercas geográficas',
      label: 'Configurar cercas geográficas',
      menu: 'Configurar cercas geográficas',
    },
    mapOutdoorIndoor: {
      name: 'Mapeamento externo / interno',
      label: 'Mapeamento externo / interno',
      menu: 'Mapeamento externo / interno',
      employeeOrAssetList: 'Lista de Funcionários / Ativos',
      filter: 'Filtro',
      latitude: 'Latitude',
      longitude: 'Longitude',
      zoom: 'Ampliação',
      bearing: 'Rolamento',
      pitch: 'Pitch',
      people: 'Pessoas',
      bleGateways: 'Gateways BLE',
      bleBeacons: 'Ble Beacons',
      employeesProtected: 'Funcionários protegidos',
      socialDistancingCompliance: 'Conformidade com distanciamento social',
      nonCompliant: 'Não compatível',
      teamMemberAtRisk: 'Membro da equipe em risco',
      immune: 'Imune',
      noContactsToDisplay: 'Nenhum contato para exibir',
      customLabelName: 'Nome do rótulo personalizado',
      atRisk: 'Em Risco',
      arcflashes: 'Flashes de arco??'
    },
    assetMapping: {
      menu: 'Mapeamento de ativos',
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
      exporterFileName: 'document_export',
      list: {
        menu: 'Documentos',
        title: 'Documentos',
      },
      create: {
        success: 'Documento salvo com sucesso',
      },
      update: {
        success: 'Documento salvo com sucesso',
      },
      destroy: {
        success: 'Documento excluído com sucesso',
        destroyAll: {
          success: 'Documento (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Documento',
      },
      fields: {
        id: 'Eu iria',
        docType: 'tipo de documento',
        docCategory: 'Categoria de Documento',
        sourceId: 'Fonte',
        name: 'Nome',
        url: 'Url',
        tagList: 'Lista de Tags',
        version: 'Versão',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSection: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        docType: {
          Pandemic: 'Pandemia',
          ArcFlash: 'ArcFlash',
          LOTO: 'LOTO',
          BleGateway: 'BleGateway'
        },
      },
      new: {
        title: 'Novo Documento',
      },
      view: {
        title: 'Ver Documento',
      },
      importer: {
        title: 'Documentos de importação',
        fileName: 'document_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    asset: {
      name: 'de ativos',
      label: 'Ativos',
      menu: 'Ativos',
      exporterFileName: 'asset_export',
      list: {
        menu: 'Ativos',
        title: 'Ativos',
      },
      create: {
        success: 'Ativo salvo com sucesso',
      },
      update: {
        success: 'Ativo salvo com sucesso',
      },
      destroy: {
        success: 'Ativo excluído com sucesso',
        destroyAll: {
          success: 'Ativo (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Ativo',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        assetType: 'Tipo de ativo',
        assetCategory: 'Asset Category??',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        productType: 'Tipo de Produto',
        warningLabelImageUrl: 'Imagem da etiqueta de aviso',
        limitedApproachBoundaryRange: 'Limite de abordagem limitada',
        limitedApproachBoundary: 'Limite de abordagem limitada',
        restrictedApproachBoundaryRange: 'Limite de abordagem restrita',
        restrictedApproachBoundary: 'Limite de abordagem restrita',
        prohibitedApproachBoundaryRange: 'Limite de abordagem proibida',
        prohibitedApproachBoundary: 'Limite de abordagem proibida',
        predictedArcingCurrentRange: 'Corrente de arco prevista',
        predictedArcingCurrent: 'Corrente de arco prevista',
        arcDurationRange: 'Duração do Arco',
        arcDuration: 'Duração do Arco',
        incidentEnergyRange: 'Energia Incidente',
        incidentEnergy: 'Energia Incidente',
        ppeRequirementsFootHand: 'PPE Requisitos Pé / Mão',
        ppeREquirementsEyeHead: 'PPE REquirements Eye / Head',
        ppeRequirementsBody: 'Corpo de Requisitos de PPE',
        documents: 'Documentos',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
        Password: 'Senha',
        LastHeartbeat: 'Último Batimento Cardíaco Encontro',
        ipaddress: 'Endereço de IP',
        state: 'Estado',
        hostname: 'Nome de anfitrião',
        softwareVersion: 'Versão do software',
        environmentVersion: 'Versão do Ambiente',
        osVersion: 'Versão do sistema operacional',
        Latitude: 'latitude',
        Longitude: 'longitude',
        X: 'X',
        Y: 'Y',
        location: 'Localização',
        deviceType: 'Tipo de dispositivo',
        deviceTypeName: 'Nome do tipo de dispositivo',
        softwareUpdateStatus: 'Software Update Status??',
        CheckWifiIPAddress: 'Verifique Wifi IPAddress??',
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
      updateAvailable: 'Update available??',
      upToDate: 'Up to date??',
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
        title: 'Novo Ativo',
      },
      view: {
        title: 'Ver Ativo',
        downloadSetings: 'Configurações de download'
      },
      importer: {
        title: 'Ativos de importação',
        fileName: 'asset_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
        id: 'Eu iria',
        name: 'Nome',
        description: 'Descrição',
        properties: 'Propriedades',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        Password: 'Password??',
        LastHeartbeat: 'Last Heart Beat??',
        ipaddress: 'Ip Address??',
        state: 'State??',
        hostname: 'Host Name??',
        softwareVersion: 'Software Version??',
        environmentVersion: 'Environment Version??',
        osVersion: 'OS Version??'
      },
    },
    cloudadmin: {
      menu: 'Administrador De Nu vem',
      title: 'Log do servidor back-end'
    },
    wearablesUpdate: {
      menu: 'Atualização de wearables',
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
      menu: 'Variáveis ​​Env??',
    },
    downloads: {
      downloads: 'Transferências',
      label: 'Transferências',
      menu: 'Transferências',
      android: 'SafetyAssist Mobile - Android??',
      iphone: 'SafetyAssist Mobile - IOS (iphone, ipad)??',
      diawi: 'Or install from Diawi??',
    },
    pandemicAssessment: {
      name: 'avaliação pandêmica',
      label: 'Avaliações de pandemia',
      menu: 'Avaliações de pandemia',
      exporterFileName: 'pandemicAssessment_export',
      list: {
        menu: 'Avaliações de pandemia',
        title: 'Avaliações de pandemia',
      },
      create: {
        success: 'Avaliação da pandemia salva com sucesso',
      },
      update: {
        success: 'Avaliação da pandemia salva com sucesso',
      },
      destroy: {
        success: 'Avaliação pandêmica excluída com sucesso',
        destroyAll: {
          success: 'Avaliação (ões) de pandemia excluída com sucesso',
        },
      },
      edit: {
        title: 'Editar Avaliação Pandêmica',
      },
      fields: {
        id: 'Eu iria',
        hasFlu: 'Gripe',
        hasHeadache: 'Dor de cabeça',
        status: 'Status',
        recommendedAction: 'Ação recomendada',
        hasDryCough: 'Tosse seca',
        employeeId: 'Paciente',
        assessedById: 'Avaliado por',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        status: {
          Unknown: 'Desconhecido',
          Symptomatic: 'Sintomático',
          Healthy: 'Saudável',
        },
        recommendedAction: {
          None: 'Nenhum',
          IsolationAtWork: 'IsolationAtWork',
          IsolationAtHome: 'IsolationAtHome',
          Hospitalization: 'Hospitalização',
          DoctorFollowup: 'DoctorFollowup',
        },
      },
      new: {
        title: 'New Pandemic',
      },
      view: {
        title: 'Ver Avaliação Pandêmica',
      },
      importer: {
        title: 'Importar avaliações de pandemia',
        fileName: 'pandemicAssessment_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    pandemicTemperature: {
      name: 'temperatura pandêmica',
      label: 'Temperaturas pandêmicas',
      menu: 'Temperaturas pandêmicas',
      exporterFileName: 'pandemicTemperature_export',
      list: {
        menu: 'Temperaturas pandêmicas',
        title: 'Temperaturas pandêmicas',
      },
      create: {
        success: 'Temperatura pandêmica salva com sucesso',
      },
      update: {
        success: 'Temperatura pandêmica salva com sucesso',
      },
      destroy: {
        success: 'Temperatura pandêmica excluída com sucesso',
        destroyAll: {
          success: 'Temperatura (s) pandêmica (s) excluída (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar temperatura pandêmica',
      },
      fields: {
        id: 'Eu iria',
        takenById: 'Tirada por',
        temperatureRange: 'Temperatura',
        temperature: 'Temperatura',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Nova Temperatura Pandêmica',
      },
      view: {
        title: 'Ver a temperatura pandêmica',
      },
      importer: {
        title: 'Importar temperaturas pandêmicas',
        fileName: 'pandemicTemperature_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    pandemicCountry: {
      name: 'país pandêmico',
      label: 'Países Pandêmicos',
      menu: 'Países Pandêmicos',
      exporterFileName: 'pandemicCountry_export',
      list: {
        menu: 'Países Pandêmicos',
        title: 'Países Pandêmicos',
      },
      create: {
        success: 'País pandêmico salvo com sucesso',
      },
      update: {
        success: 'País pandêmico salvo com sucesso',
      },
      destroy: {
        success: 'País pandêmico excluído com sucesso',
        destroyAll: {
          success: 'Países pandêmicos excluídos com sucesso',
        },
      },
      edit: {
        title: 'Editar país pandêmico',
      },
      fields: {
        id: 'Eu iria',
        country: 'País',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novo país pandêmico',
      },
      view: {
        title: 'Ver Pandemic Country',
      },
      importer: {
        title: 'Importar países pandêmicos',
        fileName: 'pandemicCountry_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
          success: 'Pandemic Country Stats salvo com sucesso',
        },
        update: {
          success: 'Pandemic Country Stats salvo com sucesso',
        },
        destroy: {
          success: 'Pandemic Country Stats excluída com sucesso',
          destroyAll: {
            success: 'Estatísticas de país pandêmicas excluídas com sucesso',
          },
        },
        edit: {
          title: 'Editar estatísticas de país pandêmico',
        },
        fields: {
          id: 'Eu iria',
          country: 'País',
          confirmedRange: 'Confirmado',
          confirmed: 'Confirmado',
          recoveredRange: 'Recuperado',
          recovered: 'Recuperado',
          criticalRange: 'Crítico',
          critical: 'Crítico',
          deathsRange: 'Mortes',
          deaths: 'Mortes',
          latitudeRange: 'Latitude',
          latitude: 'Latitude',
          longitudeRange: 'Longitude',
          longitude: 'Longitude',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        new: {
          title: 'Novas estatísticas de país pandêmico',
        },
        view: {
          title: 'Ver Estatísticas Country Pandêmicas',
        },
        importer: {
          title: 'Importar estatísticas de países pandêmicos',
          fileName: 'pandemicCountryStats_import_template',
          hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
        },
      },
    },
    locations: {
      name: 'Localizações',
      label: 'Localizações',
      menu: 'Localizações',
      exporterFileName: 'localização_exportar',
      list: {
        menu: 'Localizações',
        title: 'Localizações',
      },
      create: {
        success: 'Locais salvos com sucesso',
      },
      update: {
        success: 'Locais salvos com sucesso',
      },
      destroy: {
        success: 'Locais excluídos com sucesso',
        destroyAll: {
          success: 'Locais excluídos com sucesso',
        },
      },
      edit: {
        title: 'Editar locais',
      },
      fields: {
        id: 'Eu iria',
        userId: 'Do utilizador',
        deviceId: 'Dispositivo',
        latitudeRange: 'Latitude',
        latitude: 'Latitude',
        longitudeRange: 'Longitude',
        longitude: 'Longitude',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novos locais',
      },
      view: {
        title: 'Ver locais',
      },
      importer: {
        title: 'Locais de importação',
        fileName: 'locations_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
      downloads: {
        downloads: 'Transferências',
        label: 'Transferências',
        menu: 'Transferências',
      },
    },
    assets: {
      name: 'Ativos',
      label: 'Ativos',
      menu: 'Ativos',
      exporterFileName: 'Assets_exportados',
      list: {
        menu: 'Ativos',
        title: 'Ativos',
      },
      create: {
        success: 'Assets salvo com sucesso',
      },
      update: {
        success: 'Assets salvo com sucesso',
      },
      destroy: {
        success: 'Ativos deletado com sucesso',
        destroyAll: {
          success: 'Ativo (s) deletado com sucesso',
        },
      },
      edit: {
        title: 'Editar Ativos',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        name: 'Nome',
        description: 'Descrição',
        refNum: 'RefNum',
        productType: 'Tipo de Produto',
        documents: 'Documentos',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novos Ativos',
      },
      view: {
        title: 'Visualizar ativos',
      },
      importer: {
        title: 'Ativos Importar',
        fileName: 'Assets_template_importacao',
        hint: 'Arquivos / Imagens devem ser como URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
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
        orgPlantId: 'Plantar',
        orgId: 'Organização',
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
      name: 'IOTOTickets',
      label: 'Ingressos LOTO',
      menu: 'Ingressos LOTO',
      exporterFileName: 'lOTOTickets_export',
      list: {
        menu: 'Ingressos LOTO',
        title: 'Ingressos LOTO',
      },
      create: {
        success: 'Ingressos LOTO salvos com sucesso',
      },
      update: {
        success: 'Ingressos LOTO salvos com sucesso',
      },
      destroy: {
        success: 'Ingressos LOTO excluídos com sucesso',
        destroyAll: {
          success: 'Ingressos LOTO excluídos com sucesso',
        },
      },
      edit: {
        title: 'Editar ingressos LOTO',
      },
      approve: {
        success: 'LOTO Ticket approved successfully??',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
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
        title: 'Novos ingressos LOTO',
      },
      view: {
        title: 'Ver ingressos LOTO',
      },
      importer: {
        title: 'Importar ingressos LOTO',
        fileName: 'lOTOTickets_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
      label: 'Ativo ArcFlash',
      menu: 'Ativo ArcFlash',
      exporterFileName: 'arcFlashAssets_export',
      list: {
        menu: 'Ativo ArcFlash',
        title: 'Ativo ArcFlash',
      },
      create: {
        success: 'Ativo ArcFlash salvo com sucesso',
      },
      update: {
        success: 'Ativo ArcFlash salvo com sucesso',
      },
      destroy: {
        success: 'Ativo ArcFlash excluído com sucesso',
        destroyAll: {
          success: 'Ativos ArcFlash excluídos com sucesso',
        },
      },
      edit: {
        title: 'Editar Ativo ArcFlash',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subáreas',
        name: 'Nome',
        description: 'Descrição',
        deviceId: 'Device ID??',
        deviceTypeId: 'Device Type??',
        afBoundary: 'Arc Flash Boundary??',
        shockHazard: 'Shock Hazard??',
        ppeCategory: 'PPE Category??',
        standardsOrg: 'Standards Organization??',
        upstreamIds: 'Upstream Assets??',
        incidentEnergy: 'Incident Energy??',
        productType: 'Tipo de Produto',
        warningLabelImageUrl: 'Imagem da etiqueta de aviso',
        limitedApproachBoundaryRange: 'Limite de abordagem limitada',
        limitedApproachBoundary: 'Limite de abordagem limitada',
        restrictedApproachBoundaryRange: 'Limite de abordagem restrita',
        restrictedApproachBoundary: 'Limite de abordagem restrita',
        prohibitedApproachBoundaryRange: 'Limite de abordagem proibida',
        prohibitedApproachBoundary: 'Limite de abordagem proibida',
        predictedArcingCurrentRange: 'Corrente de arco prevista',
        predictedArcingCurrent: 'Corrente de arco prevista',
        arcDurationRange: 'Duração do Arco',
        arcDuration: 'Duração do Arco',
        incidentEnergyRange: 'Energia Incidente',
        ppeRequirementsFootHand: 'PPE Requisitos Pé / Mão',
        ppeREquirementsEyeHead: 'PPE REquirements Eye / Head',
        ppeRequirementsBody: 'Corpo de Requisitos de PPE',
        documents: 'Documentos',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo ativo ArcFlash',
      },
      view: {
        title: 'Ver Ativo ArcFlash',
      },
      importer: {
        title: 'Importar ativo ArcFlash',
        fileName: 'arcFlashAssets_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
        success: 'Tipo de dispositivo ArcFlash salvo com sucesso',
      },
      update: {
        success: 'Tipo de dispositivo ArcFlash salvo com sucesso',
      },
      destroy: {
        success: 'Tipo de dispositivo ArcFlash excluído com sucesso',
        destroyAll: {
          success: 'Tipo (s) de dispositivo ArcFlash excluído com sucesso',
        },
      },
      edit: {
        title: 'Editar tipo de dispositivo ArcFlash',
      },
      fields: {
        id: 'Eu iria',
        name: 'Nome',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novo tipo de dispositivo ArcFlash',
      },
      view: {
        title: 'Exibir tipo de dispositivo ArcFlash',
      },
      importer: {
        title: 'Importar tipos de dispositivo ArcFlash',
        fileName: 'arcFlashDeviceTypes_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    notificationGroups: {
      name: 'grupo de notificação',
      label: 'Grupos de Notificação',
      menu: 'Grupos de Notificação',
      exporterFileName: 'notificaçãoGrupos_exportação',
      list: {
        menu: 'Grupos de Notificação',
        title: 'Grupos de Notificação',
      },
      create: {
        success: 'Grupo de Notificação salvo com sucesso',
      },
      update: {
        success: 'Grupo de Notificação salvo com sucesso',
      },
      destroy: {
        success: 'Grupo de Notificação excluído com sucesso',
        destroyAll: {
          success: 'Grupo (s) de notificação excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Grupo de Notificação',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        name: 'Nome',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novo Grupo de Notificação',
      },
      view: {
        title: 'Ver Grupo de Notificação',
      },
      importer: {
        title: 'Importar grupos de notificação',
        fileName: 'notificationGroups_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    messagingGroups: {
      name: 'messagingGroups',
      label: 'Grupo de Mensagens',
      menu: 'Grupo de Mensagens',
      exporterFileName: 'messagingGroups_export',
      list: {
        menu: 'Grupo de Mensagens',
        title: 'Grupo de Mensagens',
      },
      create: {
        success: 'Grupo de mensagens salvo com sucesso',
      },
      update: {
        success: 'Grupo de mensagens salvo com sucesso',
      },
      destroy: {
        success: 'Grupo de mensagens excluído com sucesso',
        destroyAll: {
          success: 'Grupo (s) de mensagens excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Grupo de Mensagens',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        name: 'Nome',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
        public: 'Público',
        persistent: 'Permanente',
      },
      new: {
        title: 'Novo Grupo de Mensagens',
      },
      view: {
        title: 'Ver Grupo de Mensagens',
      },
      importer: {
        title: 'Importar Grupo de Mensagens',
        fileName: 'messagingGroups_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    messagingGroupMembers: {
      name: 'messagingGroupMembers',
      label: 'Membros do grupo de mensagens',
      menu: 'Membros do grupo de mensagens',
      exporterFileName: 'messagingGroupMembers_export',
      list: {
        menu: 'Membros do grupo de mensagens',
        title: 'Membros do grupo de mensagens',
      },
      create: {
        success: 'Membro do grupo de mensagens salvo com sucesso',
      },
      update: {
        success: 'Membro do grupo de mensagens salvo com sucesso',
      },
      destroy: {
        success: 'Membro do grupo de mensagens excluído com sucesso',
        destroyAll: {
          success: 'Membro (s) do grupo de mensagens excluídos com sucesso',
        },
      },
      edit: {
        title: 'Editar Membro do Grupo de Mensagens',
      },
      fields: {
        id: 'Eu iria',
        groupId: 'Id do grupo de mensagens',
        userId: 'Do utilizador',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      new: {
        title: 'Novo membro do grupo de mensagens',
      },
      view: {
        title: 'Exibir membro do grupo de mensagens',
      },
      importer: {
        title: 'Importar membros do grupo de mensagens',
        fileName: 'messagingGroupMembers_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    chat: {
      name: 'bate-papo',
      label: 'Bate-papo',
      menu: 'Bate-papo',
      title: 'Bate-papo',
      permanent: 'Permanente',
      public: 'Público',
      editname: 'Editar',
      exitGroup: 'Sair do Grupo',
      exporterFileName: 'chat_export',
      list: {
        menu: 'Bate-papo',
        title: 'Bate-papo',
      },
      create: {
        success: 'Bate-papo salvo com sucesso',
      },
      update: {
        success: 'Bate-papo salvo com sucesso',
      },
      destroy: {
        success: 'Bate-papo excluído com sucesso',
        destroyAll: {
          success: 'Bate-papo (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar bate-papo',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        orgSectionId: 'Seção',
        orgAreaId: 'Área',
        orgSubAreaId: 'Subárea',
        groupId: 'Id do Grupo',
        groupName: 'Nome do grupo',
        userId: 'ID do usuário',
        message: 'mensagem',
        files: 'Arquivo',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
        selectGroup: 'Selecione o grupo',
        typeAMessage: 'Digite uma mensagem',
        searchForAChatGroup: 'Procure um grupo de bate-papo',
        newChatGroup: 'Novo Grupo de Chat',
        enterNewChatGroupName: 'Por favor, insira o nome do grupo de bate-papo.',
        chatGroupName: 'Nome do grupo de bate-papo:',
        persistent: 'Persistente',
        editChatGroup: 'Editar grupo de bate-papo',
        groupImage: 'Carregar imagem do grupo',
        create: 'Crio',
        confirm: 'confirme',
        apply: 'Aplique',
        sortBy: 'Ordenar por',
        startDate: 'Data de início',
        endDate: 'Data final',
        dateAscending: 'Data Ascendente',
        dateDescending: 'Data Decrescente',
        searchText: 'Texto de Pesquisa',
        inviteMembers: 'Convidar membros',
        inviteorRemoveMembers: 'Convide ou remova membros',
        joinThisGroupToSendMessage: 'Junte-se a este grupo para enviar uma mensagem',
      },
      new: {
        title: 'Novo chat',
      },
      view: {
        title: 'Ver chat',
      },
      importer: {
        title: 'Importar bate-papo',
        fileName: 'chat_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    employee: {
      name: 'empregado',
      label: 'Funcionários',
      menu: 'Funcionários',
      exporterFileName: 'funcionário_exportação',
      list: {
        menu: 'Funcionários',
        title: 'Funcionários',
      },
      create: {
        success: 'Funcionário salvo com sucesso',
      },
      update: {
        success: 'Funcionário salvo com sucesso',
      },
      destroy: {
        success: 'Funcionário excluído com sucesso',
        destroyAll: {
          success: 'Funcionário (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar funcionário',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        firstName: 'Primeiro nome',
        lastName: 'Último nome',
        directManager: 'Gerente direto',
        assetType: 'Tipo de ativo',
        employeeType: 'EmployeeType',
        employeeNumber: 'Empregado #',
        title: 'Título',
        mainWorkArea: 'Área de Trabalho Principal',
        email: 'O email',
        state: 'Estado',
        action: 'Açao',
        avatar: 'Avatar',
        lastContactRange: 'Último contato',
        lastContact: 'Último contato',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
        password: "Senha",
        createUser: "Criar usuário automaticamente?",
        phoneNumber: 'Telefone',
        countryCode: 'Código do país',
        roles: 'Função',
        deviceType: 'Tipo de dispositivo',
        deviceTypeDesc: 'tipo De Dispositivo Descrição'
      },
      enumerators: {
        assetType: {
          Person: 'Pessoa',
        },
        employeeType: {
          Employee: 'Empregado',
          Contractor: 'Contratante',
          Visitor: 'Visitante'
        }
      },
      new: {
        title: 'Novo empregado',
      },
      view: {
        title: 'Ver Funcionário',
      },
      importer: {
        title: 'Funcionários de importação',
        fileName: 'Employee_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    beacon: {
      name: 'baliza',
      label: 'Beacons',
      menu: 'Beacons',
      exporterFileName: 'beacon_export',
      list: {
        menu: 'Beacons',
        title: 'Beacons',
      },
      create: {
        success: 'Beacon salvo com sucesso',
      },
      update: {
        success: 'Beacon salvo com sucesso',
      },
      destroy: {
        success: 'Beacon excluído com sucesso',
        destroyAll: {
          success: 'Beacon (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Beacon',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        employeeId: 'Empregado',
        assetId: 'Asset',
        uUIDMinorRange: 'UUIDMinor',
        uUIDMinor: 'UUIDMinor',
        deviceTypeRange: 'Tipo de dispositivo',
        deviceType: 'Tipo de dispositivo',
        deviceTypeName: 'Nome do tipo de dispositivo',
        deviceTypeDesc: 'Descrição do tipo de dispositivo',
        isProximityAlert: 'É Alerta de Proximidade',
        minProximityMRange: 'MinProximityM',
        minProximityM: 'MinProximityM',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
        assigneeType: 'Tipo de Cessionário',
        employeeType: 'Tipo de Funcionário',
        employeeNumber: 'Empregado #',
        isRegistered: "EstáRegistrado",
        isAssigned: "Está Atribuído?",
        serialNum: "número de série",
        trackingCode: "Código de Rastreamento",
        purchaseDate: "data de compra",
        measuredPower: 'Potência medida',
        measuredPowerHint: 'O valor padrão será definido se a entrada não for fornecida.',
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
        title: 'Ver Beacon',
      },
      importer: {
        title: 'Importar Beacons',
        fileName: 'beacon_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
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
      name: 'firmware',
      label: 'Firmware',
      menu: 'Firmware',
      exporterFileName: 'firmware_export',
      list: {
        menu: 'Firmware',
        title: 'Firmware',
      },
      create: {
        success: 'firmware salvo com sucesso',
      },
      update: {
        success: 'firmware salvo com sucesso',
      },
      destroy: {
        success: 'firmware excluído com sucesso',
        destroyAll: {
          success: 'firmware (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar firmware',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        deviceTypeRange: 'Tipo de dispositivo',
        deviceType: 'Tipo de dispositivo',
        deviceTypeName: 'Nome do tipo de dispositivo',
        deviceTypeDesc: 'Descrição do tipo de dispositivo',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        dateReleased: 'Data de Lançamento',
        firmwareVersion: 'Versão do firmware',
        softwareVersion: 'Versão do software',
        environmentVersion: 'Versão do ambiente',
        firmwareZip: 'Arquivo de firmware Zip',
        softwareZip: 'Arquivo de software Zip',
        environmentScriptZip: 'Zip de script de ambiente',
        orgDetails: 'Detalhes da organização'
      },
      new: {
        title: 'New firmware',
      },
      view: {
        title: 'Ver firmware',
      },
      importer: {
        title: 'Importar Firmware',
        fileName: 'firmware_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    masterEmailTemplate: {
      name: 'Modelo de email mestre',
      label: 'Modelo de email mestre',
      menu: 'Modelo de email mestre',
      exporterFileName: 'exportaçãoDeModeloDeEMailMestre',
      list: {
        menu: 'Modelo de email mestre',
        title: 'Modelo de email mestre',
      },
      create: {
        success: 'Modelo de email mestre salvo com sucesso',
      },
      update: {
        success: 'Modelo de email mestre salvo com sucesso',
      },
      destroy: {
        success: 'Modelo de email mestre excluído com sucesso',
        destroyAll: {
          success: 'Modelo (s) de e-mail mestre excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar modelo de email mestre',
      },
      new: {
        title: 'Novo modelo de email mestre',
      },
      view: {
        title: 'Exibir modelo de email mestre',
      },
      enumerators: {
        templateType: {
          TemperatureTaken: 'Temperatura obtida',
          FailedAssessment: 'Avaliação reprovada',
          CloseContact: 'Contato próximo',
          HighConcentrationArea: 'Área de alta concentração',
          LotoLock: 'LOTO Lock??',
          LotoUnlock: 'LOTO Unlock??',
          ArcFlashAuditDue: 'Arc Flash Audit Due??'
        },
      },
    },
    emailTemplate: {
      name: 'tempalateDeEmail',
      label: 'tempalateDeEmail',
      menu: 'tempalateDeEmail',
      exporterFileName: 'exportEmailTemplate',
      list: {
        menu: 'tempalateDeEmail',
        title: 'tempalateDeEmail',
      },
      create: {
        success: 'Email Tempalate salvo com sucesso',
      },
      update: {
        success: 'Email Tempalate salvo com sucesso',
      },
      destroy: {
        success: 'Email Tempalate excluído com sucesso',
        destroyAll: {
          success: 'Email Tempalate (s) deletados com sucesso'
        },
      },
      edit: {
        title: 'Editar modelo de email',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        name: 'Nome',
        subject: 'Sujeito',
        body: 'Corpo',
        isEnabled: 'Status',
        templateType: 'Tipo de modelo',
        subjectLang: 'Sujeito({0})',
        bodyLang: 'Corpo({0})',
      },
      new: {
        title: 'novoTempalateDeEmail',
      },
      view: {
        title: 'Ver Email Tempalate',
      },
      disabled: 'Desativado',
      enabled: 'Ativado',
      doDisableAllSuccess: 'Modelo (s) desativado (s) com sucesso',
      doEnableAllSuccess: 'Modelo (s) habilitado (s) com sucesso',
    },
    travelHistory: {
      name: 'Viagem',
      label: 'Viagem',
      menu: 'Viagem',
      exporterFileName: 'viagemHistória_exportar ',
      list: {
        menu: 'Viagem',
        title: 'Viagem',
      },
      create: {
        success: 'Viagem salva com sucesso ',
      },
      update: {
        success: 'Viagem salva com sucesso ',
      },
      destroy: {
        success: 'Viagem excluída com sucesso ',
        destroyAll: {
          success: 'Viagem (ens) excluída (s) com sucesso ',
        },
      },
      edit: {
        title: 'Editar Viagem ',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        employeeId: 'Empregado',
        travelType: 'Tipo de viagem ',
        destination: 'Destino',
        startTime: 'Hora de início ',
        endTime: 'Fim do tempo',
        createdAtRange: 'Encontro',
        duration: 'Duração',
        purpose: 'Objetivo'
      },
      enumerators: {
        travelType: {
          international: 'Internacional',
          local: 'local'
        }
      },
      new: {
        title: 'Novo Travel ',
      },
      view: {
        title: 'Ver Viagem ',
      },
      importer: {
        title: 'Viagem de importação ',
        fileName: 'viagem_importar_modelo ',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço. ',
      },
    },
    testingHistory: {
      name: 'Testes',
      label: 'Testes',
      menu: 'Testes',
      exporterFileName: 'exportaçãoDeHistóricoDeTeste',
      list: {
        menu: 'Testes',
        title: 'Testes',
      },
      create: {
        success: 'Teste salvo com sucesso',
      },
      update: {
        success: 'Teste salvo com sucesso',
      },
      destroy: {
        success: 'Teste excluído com sucesso',
        destroyAll: {
          success: 'Teste (s) excluído (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Teste',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        employeeId: 'Empregado',
        testType: 'Tipo de Teste',
        method: 'Método',
        reason: 'Razão',
        result: 'Resultado',
        testDate: 'Data e hora do teste'
      },
      enumerators: {
        testType: {
          express: 'Teste expresso',
          lab: 'Teste de laboratório'
        },
        method: {
          swab: 'Cotonete',
          blood: 'Sangue',
          urine: 'Urina'
        },
        result: {
          pending: 'Pendente',
          positive: 'Positivo',
          negative: 'Negativo'
        }
      },
      new: {
        title: 'Novo Teste',
      },
      view: {
        title: 'Ver Teste',
      },
      importer: {
        title: 'Teste de importação',
        fileName: 'modeloDeImportaçãoDeTeste',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    vaccineHistory: {
      name: 'Vacina',
      label: 'Vacina',
      menu: 'Vacina',
      exporterFileName: 'vacinaHistory_export',
      list: {
        menu: 'Vacina',
        title: 'Vacina',
      },
      create: {
        success: 'Vacina salva com sucesso',
      },
      update: {
        success: 'Vacina salva com sucesso',
      },
      destroy: {
        success: 'Vacina excluída com sucesso',
        destroyAll: {
          success: 'Vacina (s) excluída (s) com sucesso',
        },
      },
      edit: {
        title: 'Editar Vacina',
      },
      fields: {
        id: 'Eu iria',
        orgId: 'Organização',
        orgPlantId: 'Plantar',
        employeeId: 'Empregado',
        vaccineType: 'Tipo de vacina',
        dateReceived: 'Data de recebimento',
        immunityDuration: 'Duração esperada de imunidade',
        expiryDate: 'Data de validade',
      },
      enumerators: {
        VaccineType: {
          express: 'vacinaExpressa',
          lab: 'vacinaDeLaboratório'
        },
        method: {
          swab: 'Cotonete',
          blood: 'Sangue',
          urine: 'Urina'
        },
        result: {
          pending: 'Pendente',
          positive: 'Positivo',
          negative: 'Negativo'
        }
      },
      new: {
        title: 'Nova Vacina',
      },
      view: {
        title: 'Ver Vacina',
      },
      importer: {
        title: 'Importar Vacina',
        fileName: 'modeloDeImportaçãoDeVacina',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço.',
      },
    },
    auth: {
      profile: {
        title: 'Editar Perfil',
        success: 'Perfil atualizado com sucesso',
        verifyCodeSuccess: 'Código verificado com sucesso',
        resendCodeSuccess: 'Código reenviado com sucesso',
        verifyCodeError: 'Ocorreu um erro ao verificar o código',
        resendCodeError: 'Ocorreu um erro ao reenviar o código',
        tokenInvalid: 'Token é inválido',
        validationFailed: 'Falha na validação'
      },
      createAnAccount: 'Crie a sua conta aqui',
      rememberMe: 'Lembre de mim',
      forgotPassword: 'Esqueceu a senha',
      signin: 'assinar em',
      signup: 'inscrever-se',
      signout: 'Sair',
      verifyCode: 'Código de verificação',
      resendCode: 'Reenviar código',
      alreadyHaveAnAccount: 'já tem uma conta? Assinar em.',
      signinWithAnotherAccount: 'Entrar com outra conta',
      emailUnverified: {
        message: 'Confirme seu e-mail em <strong> {0} </strong> para continuar.',
        submit: 'Reenviar verificação de e-mail',
      },
      emptyPermissions: {
        message: 'Você ainda não tem permissão. Aguarde até que o administrador conceda privilégios a você.',
      },
      passwordResetEmail: {
        message: 'Enviar e-mail de redefinição de senha',
        error: 'Email não reconhecido',
      },
      passwordReset: {
        message: 'Redefinir senha',
      },
      emailAddressVerificationEmail: {
        error: 'Email não reconhecido',
      },
      verificationEmailSuccess: 'Email de verificação enviado com sucesso',
      passwordResetEmailSuccess: 'Email de redefinição de senha enviado com sucesso',
      passwordResetSuccess: 'Senha alterada com sucesso',
      verifyEmail: {
        success: 'Email verificado com sucesso',
        message: 'Espere um momento, seu e-mail está sendo verificado ...',
      },
    },
    roles: {
      owner: {
        label: 'Proprietário',
        description: 'Acesso total a todos os recursos',
      },
      orgAdmin: {
        label: 'Administrador da Organização',
        description: 'Visualize apenas painéis e relatórios de nível organizacional, páginas de gerenciamento de usuários',
      },
      plantAdmin: {
        label: 'Administrador da Planta',
        description: 'Ver todas as páginas com a planta correspondente do usuário conectado',
      },
      user: {
        label: 'Do utilizador',
        description: 'Sem acesso à web, apenas acesso ao aplicativo para celular',
      },
      security: {
        label: 'Segurança',
        description: 'Visualize o portão de segurança, o histórico do funcionário, o provisionamento de dispositivos, a localização interna / externa e as páginas dos painéis',
      },
      nurse: {
        label: 'Enfermeira',
        description: 'Ver estação de enfermagem, histórico de funcionários e páginas de painéis',
      },
      manager: {
        label: 'Gerente',
        description: 'Ver visão do gerente, histórico do funcionário, localização interna / externa, painéis e páginas de relatórios',
      },
      editor: {
        label: 'editor',
        description: 'Editar o acesso a todos os recursos',
      },
      viewer: {
        label: 'Visualizador',
        description: 'Ver acesso a todos os recursos',
      },
      auditLogViewer: {
        label: 'Visualizador de registro de auditoria',
        description: 'Acesso para visualizar registros de auditoria',
      },
      iamSecurityReviewer: {
        label: 'Revisor de Segurança',
        description: 'Acesso total para gerenciar funções de usuários',
      },
      entityEditor: {
        label: 'Editor de Entidade',
        description: 'Editar o acesso a todas as entidades',
      },
      entityViewer: {
        label: 'Visualizador de Entidades',
        description: 'Ver o acesso a todas as entidades',
      },
      organizationsEditor: {
        label: 'Editor de Organizações',
        description: 'Editar acesso a organizações',
      },
      organizationsViewer: {
        label: 'Visualizador de organizações',
        description: 'Ver acesso a organizações',
      },
      orgPlantsEditor: {
        label: 'Editor Org Plants',
        description: 'Editar acesso a Org Plants',
      },
      orgPlantsViewer: {
        label: 'Visualizador Org Plants',
        description: 'Ver acesso a Org Plants',
      },
      orgSectionsEditor: {
        label: 'Editor de seções da organização',
        description: 'Editar acesso a OrgSections',
      },
      orgSectionsViewer: {
        label: 'Visualizador de seções da organização',
        description: 'Ver acesso a OrgSections',
      },
      orgAreasEditor: {
        label: 'Editor de Área',
        description: 'Editar o acesso às áreas',
      },
      orgAreasViewer: {
        label: 'Visualizador de área',
        description: 'Ver o acesso às áreas',
      },
      orgSubAreasEditor: {
        label: 'Editor de Subárea',
        description: 'Editar o acesso às subáreas',
      },
      orgSubAreasViewer: {
        label: 'Visualizador de subárea',
        description: 'Ver o acesso às subáreas',
      },
      documentEditor: {
        label: 'Editor de Documentos',
        description: 'Editar acesso a documentos',
      },
      documentViewer: {
        label: 'Visualizador de Documentos',
        description: 'Ver acesso a documentos',
      },
      assetEditor: {
        label: 'Editor de Ativos',
        description: 'Editar acesso a ativos',
      },
      assetViewer: {
        label: 'Visualizador de ativos',
        description: 'Ver acesso aos ativos',
      },
      pandemicAssessmentEditor: {
        label: 'Pandemic Assessment Editor',
        description: 'Editar o acesso às avaliações da pandemia',
      },
      pandemicAssessmentViewer: {
        label: 'Pandemic Assessment Viewer',
        description: 'Veja o acesso às avaliações da pandemia',
      },
      pandemicTemperatureEditor: {
        label: 'Editor de temperatura pandêmica',
        description: 'Editar acesso a temperaturas pandêmicas',
      },
      pandemicTemperatureViewer: {
        label: 'Pandemic Temperature Viewer',
        description: 'Veja o acesso a temperaturas pandêmicas',
      },
      pandemicCountryEditor: {
        label: 'Pandemic Country Editor',
        description: 'Editar acesso a países pandêmicos',
      },
      pandemicCountryViewer: {
        label: 'Pandemic Country Viewer',
        description: 'Ver acesso a países pandêmicos',
      },
      pandemicCountryStatsEditor: {
        label: 'Pandemic Country Stats Editor',
        description: 'Editar o acesso a Pandemic Country Stats',
      },
      pandemicCountryStatsViewer: {
        label: 'Pandemic Country Stats Viewer',
        description: 'Ver o acesso às Estatísticas Country Pandemic',
      },
      locationsEditor: {
        label: 'Editor de locais',
        description: 'Editar o acesso aos locais',
      },
      locationsViewer: {
        label: 'Visualizador de locais',
        description: 'Ver o acesso aos locais',
      },
      arcFlashAssetsEditor: {
        label: 'Editor de ativos ArcFlash',
        description: 'Editar acesso ao ativo ArcFlash',
      },
      arcFlashAssetsViewer: {
        label: 'Visualizador de ativos ArcFlash',
        description: 'Ver acesso ao ArcFlash Asset',
      },
      arcFlashProductTypesEditor: {
        label: 'Editor de tipo de produto ArcFlash',
        description: 'Editar o acesso aos tipos de produto ArcFlash',
      },
      arcFlashProductTypesViewer: {
        label: 'Visualizador de tipo de produto ArcFlash',
        description: 'Ver o acesso aos tipos de produto ArcFlash',
      },
      notificationGroupsEditor: {
        label: 'Editor de Grupo de Notificação',
        description: 'Editar o acesso aos grupos de notificação',
      },
      notificationGroupsViewer: {
        label: 'Visualizador de grupo de notificação',
        description: 'Ver o acesso aos grupos de notificação',
      },
      messagingGroupsEditor: {
        label: 'Editor de Grupo de Mensagens',
        description: 'Editar o acesso ao grupo de mensagens',
      },
      messagingGroupsViewer: {
        label: 'Visualizador de grupo de mensagens',
        description: 'Ver acesso ao grupo de mensagens',
      },
      messagingGroupMembersEditor: {
        label: 'Editor de membro do grupo de mensagens',
        description: 'Editar o acesso aos membros do grupo de mensagens',
      },
      messagingGroupMembersViewer: {
        label: 'Visualizador de membro do grupo de mensagens',
        description: 'Ver acesso aos membros do grupo de mensagens',
      },
      chatEditor: {
        label: 'Editor de bate-papo',
        description: 'Editar o acesso ao chat',
      },
      chatViewer: {
        label: 'Visualizador de bate-papo',
        description: 'Ver acesso ao chat',
      },
      beaconEditor: {
        label: 'Editor de Beacons',
        description: 'Editar o acesso aos beacons',
      },
      beaconViewer: {
        label: 'Visualizador De Beacons',
        description: 'Ver acesso aos beacons',
      },
      employeeEditor: {
        label: 'Editor de Funcionário',
        description: 'Editar acesso para funcionários',
      },
      employeeViewer: {
        label: 'Visualizador de funcionário',
        description: 'Acesso de visualização para funcionários',
      }
    },
    iam: {
      title: 'Gerenciamento de identidade e acesso',
      menu: 'EU SOU',
      disable: 'Desabilitar',
      disabled: 'Desativado',
      enabled: 'ativado',
      enable: 'Habilitar',
      doEnableSuccess: 'Usuário habilitado com sucesso',
      doDisableSuccess: 'Usuário desabilitado com sucesso',
      doDisableAllSuccess: 'Usuário (s) desativado (s) com sucesso',
      doEnableAllSuccess: 'Usuário (s) habilitado (s) com sucesso',
      doAddSuccess: 'Usuário (s) salvo (s) com sucesso',
      doUpdateSuccess: 'Usuário salvo com sucesso',
      viewBy: 'Visto por',
      users: {
        name: 'Comercial',
        label: 'Comercial',
        exporterFileName: 'users_export',
        doRemoveAllSelectedSuccess: 'Permissões removidas com sucesso',
      },
      roles: {
        label: 'Funções',
        doRemoveAllSelectedSuccess: 'Permissões removidas com sucesso',
      },
      edit: {
        title: 'Editar usuário',
      },
      new: {
        title: 'Novos usuários)',
        titleModal: 'Novo usuário',
        emailsHint: 'Separe vários endereços de e-mail usando o caractere de vírgula.',
      },
      view: {
        title: 'Ver usuário',
        activity: 'Atividade',
      },
      importer: {
        title: 'Importar usuários',
        fileName: 'users_import_template',
        hint: 'As colunas Arquivos / Imagens devem ser os URLs dos arquivos separados por espaço. Os relacionamentos devem ser o ID dos registros referenciados separados por espaço. As funções devem ser os IDs de função separados por espaço.',
      },
      errors: {
        userAlreadyExists: 'Já existe usuário com este endereço de email',
        userNotFound: 'Usuário não encontrado',
        disablingHimself: 'Você pode',
        revokingOwnPermission: 'Você pode',
      },
      destroy: {
        success: 'Usuário excluído com sucesso',
        destroyAll: {
          success: 'Usuário(s) excluído com sucesso',
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
      id: 'Eu iria',
      orgId: 'Organização',
      orgPlantId: 'Plantar',
      authenticationUid: 'Uid de autenticação',
      avatars: 'Avatar',
      email: 'O email',
      emails: 'Email (s)',
      employee: 'Empregado(s)',
      fullName: 'Nome',
      firstName: 'Primeiro nome',
      lastName: 'Último nome',
      status: 'Status',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      countryCode: 'Código do país',
      orgPlant: 'Plantar',
      employeeNum: 'Número de funcionário',
      orgPrefix: 'Código da organização',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Função / usuário',
      roles: 'Funções',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
      twoFactorEnabled: 'Habilitar 2FA',
      verifyCode: 'Código'
    },
    enabled: 'ativado',
    disabled: 'Desativado',
    validations: {
      email: 'Email ${value} é inválido',
    },
  },
  geoSubSite: {
    fields: {
      locationName: 'Nome do local',
      indoorMap: 'Imagem do chão',
      hasIndoorMap: 'Tem um mapa interno',
      search: 'Endereço de Pesquisa',
      latitude: 'Latitude',
      longitude: 'Longitude',
      floor: 'Chão#',
      maxOccupancy: 'Ocupação Maxima',
      parentSubsite: 'Subite pai',
      zoom: 'Ampliação',
      bearing: 'Rolamento',
      pitch: 'Pitch',
      entireArea: 'Área Inteira',
      subsite: 'subsite',
      geofence: 'geocerca',
    },
    messages: {
      addSuccess: 'Subsite adicionado com sucesso',
      editSuccess: 'Subsite editado com sucesso',
      addError: 'Algo deu errado!',
      editError: 'Algo deu errado durante a atualização!',
      saveError: 'Desenhe cercas geográficas antes de salvar os dados!',
      saveErrorForSubsite: 'Desenhe geocercas para planta primeiro!',
      deleteSuccess: 'Subsite excluído com sucesso',
      deleteError: 'Ocorreu um erro durante a exclusão!',
      floorImageIsReq: 'A imagem do chão é obrigatória',
      floorNumIsReq: 'Nº do andar obrigatório',
      parentSubsiteIsReq: 'O Subsite Pai é obrigatório',
      noGeoFenceFound: 'Nenhuma geocerca encontrada!',
      addNewSubsite: 'Adicionar novo subsite',
      actionMenu: 'Menu de Ação',
      editGeoFence: 'Editar geocerca',
      editSubsite: 'Editar subsite',
      typeNameForThisLocation: 'Digite um nome para este local. Depois de concluído, você será colocado no modo de edição para que possa pesquisar um local e movimentar, aplicar zoom e girar até obter a visualização da maneira que desejar',
      editlocation: 'Aqui você pode editar os detalhes do local selecionado',
      createNew: 'Crie um novo',
      location: 'Localização',
      searchlocation: 'Localização de pesquisa',
      searchlocationmessage: 'Você pode pesquisar um local usando',
      name: 'Nome',
      coordinates: 'Coordenadas',
      loading: 'Carregando',
    },
    geoFenceArea: 'ÁREA DE CERCA GEO',
    geoFenceCoordinates: 'Coordenadas Geo Fence',
  },
  geoRooms: {
    addRoom: 'Add Room??',
    editRoom: 'Edit Room??',
    fields: {
      roomName: 'Nome da sala',
    },
    messages: {
      addSuccess: 'Sala adicionada com sucesso',
      editSuccess: 'Sala editada com sucesso',
      saveSuccess: 'Salvo com sucesso',
      deleteSuccess: 'Deleeted SuccessFully',
      error: 'Algo deu errado',
      deleteError: 'Algo deu errado ao excluir',
      saveError: 'Desenhe um polígono antes de salvar',
      notFound: 'Nenhum GeoRoom encontrado!',
    },
  },
  auditLog: {
    menu: 'Logs de auditoria',
    title: 'Logs de auditoria',
    view: 'Logs de auditoria Visão',
    exporterFileName: 'audit_log_export',
    entityNamesHint: 'Separe várias entidades usando o caractere de vírgula.',
    fields: {
      id: 'Eu iria',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da entidade',
      action: 'Açao',
      values: 'Valores',
      timestamp: 'Encontro',
      createdByEmail: 'Email do usuário',
    },
  },
  errorLog: {
    menu: 'Logs de erros',
    title: 'Logs de erros',
    view: 'Logs de erros Visão',
    exporterFileName: 'error_log_export',
    entityNamesHint: 'Separe várias entidades usando o caractere de vírgula.',
    fields: {
      id: 'Eu iria',
      orgId: 'Organização',
      orgPlantId: 'Plantar',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      description: 'Descrição',
      method: 'Método',
      values: 'Valores',
      timestamp: 'Encontro',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso. A página será recarregada em {0} segundos para que as alterações tenham efeito.',
    },
    fields: {
      primary: 'Cor primária',
      secondary: 'Cor Secundária',
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
      primary: 'Cor primária',
      secondary: 'Cor Secundária',
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
    menu: 'Casa',
    message: 'Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-lo em frontend / view / home / HomePage.js.',
    realtimeMapping: 'Mapeamento em tempo real',
    analytics: 'Analytics',
    managementReports: 'Relatórios de Gestão',
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelo',
      grey: 'Cinzento',
      blue: 'Azul',
      orange: 'laranja',
      months: {
        1: 'janeiro',
        2: 'fevereiro',
        3: 'Março',
        4: 'abril',
        5: 'Posso',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'adormecido',
      designing: 'Projetando',
      coding: 'Codificação',
      cycling: 'Ciclismo',
      running: 'Corrida',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'De volta para casa',
    403: 'Desculpe, você não tem acesso a esta página',
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Proibido',
    },
    validation: {
      message: 'Um erro ocorreu',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf: '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf: '${path} não deve ser um dos seguintes valores: ${values}',
    },
    string: {
      length: '${path} deve ter exatamente ${length} caracteres',
      min: '${path} deve ter pelo menos ${min} caracteres',
      max: '${path} deve ter no máximo ${max} caracteres',
      matches: '${path} deve corresponder ao seguinte: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser um URL válido',
      trim: '${path} deve ser uma string aparada',
      lowercase: '${path} deve ser uma string minúscula',
      uppercase: '${path} deve ser uma string em maiúsculas',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: 'O campo ${path} deve ser posterior a ${min}',
      max: 'O campo ${path} deve ser anterior a ${max}',
    },
    object: {
      noUnknown: 'O campo ${path} não pode ter chaves não especificadas na forma do objeto',
    },
    array: {
      min: 'O campo ${path} deve ter pelo menos ${min} itens',
      max: 'O campo ${path} deve ter menos ou igual a ${max} itens',
    },
  },
  fileUploader: {
    upload: 'Envio',
    image: 'Você deve carregar uma imagem',
    size: 'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: 'Formato Inválido. Devemos ser',
  },
  importer: {
    line: 'Linha',
    status: 'Status',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: '{0} importado, {1} pendente e {2} com erro',
    importedMessage: 'Processado {0} de {1}.',
    noNavigateAwayMessage: 'Não navegue para fora desta página ou a importação será interrompida.',
    completed: {
      success: 'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors: 'Processamento concluído, mas algumas linhas não puderam ser importadas.',
      allErrors: 'A importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint: 'Clique ou arraste o arquivo para esta área para continuar',
    },
    list: {
      discardConfirm: 'Você tem certeza? Os dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel: 'Somente arquivos excel (.xlsx) são permitidos',
      invalidFileUpload: 'Arquivo inválido. Certifique-se de usar a última versão do modelo.',
      importHashRequired: 'O hash de importação é obrigatório',
      importHashExistent: 'Os dados já foram importados',
    },
  },
  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Nenhum dado encontrado',
  },
  imagesViewer: {
    noImage: 'Sem imagem',
  },
  table: {
    noData: 'sem registros encontrados',
    loading: 'Carregando...',
  },
  body: {
    emptyDataSourceMessage: 'Não há registros a serem exibidos',
    editRow: {
      deleteText: 'Tem certeza de que deseja excluir esta linha?',
    },
  },
  grouping: {
    placeholder: 'Arraste os cabeçalhos ...',
    groupedBy: 'Agrupado por:',
  },
  header: {
    actions: 'Ações',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelDisplayedRowsCustom: '{from}-{to} de {count}',
    labelRowsPerPage: 'Por página:',
    labelRowsSelect: 'Linhas',
    firstAriaLabel: 'Primeira página',
    previousAriaLabel: 'Página anterior',
    nextAriaLabel: 'Próxima página',
    lastAriaLabel: 'Última página',
  },
  toolbar: {
    toolbar: 'Adicionar ou remover colunas',
    nRowsSelected: '{0} linha (s) selecionada (s)',
    showColumnsTitle: 'Mostrar colunas',
    exportTitle: 'Exportar',
    exportCSVName: 'Exportar como CSV',
    exportPDFName: 'Exportar como PDF',
    searchTooltip: 'Procurar',
  },
  insights: {
    menu: "Intuições"
  },
  devices: {
    menu: "Dispositivos"
  },
  dataEntry: {
    menu: "Entrada de dados"
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

export default ptBR;
