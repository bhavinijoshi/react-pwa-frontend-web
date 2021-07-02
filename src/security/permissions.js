import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      orgAreasImport: {
        id: 'orgAreasImport',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgAreasEditor,
        ],
      },
      orgAreasCreate: {
        id: 'orgAreasCreate',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgAreasEditor,
        ],
        allowedStorageFolders: ['orgAreas'],
      },
      orgAreasEdit: {
        id: 'orgAreasEdit',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgAreasEditor,
        ],
        allowedStorageFolders: ['orgAreas'],
      },
      orgAreasDestroy: {
        id: 'orgAreasDestroy',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgAreasEditor,
        ],
        allowedStorageFolders: ['orgAreas'],
      },
      orgAreasRead: {
        id: 'orgAreasRead',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orgAreasEditor,
          roles.orgAreasViewer,
        ],
      },
      orgSubAreasImport: {
        id: 'orgSubAreasImport',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgSubAreasEditor,
        ],
      },
      orgSubAreasCreate: {
        id: 'orgSubAreasCreate',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgSubAreasEditor,
        ],
        allowedStorageFolders: ['orgSubAreas'],
      },
      orgSubAreasEdit: {
        id: 'orgSubAreasEdit',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgSubAreasEditor,
        ],
        allowedStorageFolders: ['orgSubAreas'],
      },
      orgSubAreasDestroy: {
        id: 'orgSubAreasDestroy',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.orgSubAreasEditor,
        ],
        allowedStorageFolders: ['orgSubAreas'],
      },
      orgSubAreasRead: {
        id: 'orgSubAreasRead',
        allowedRoles: [
          roles.owner,
          roles.orgAdmin,
          roles.plantAdmin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.orgSubAreasEditor,
          roles.orgSubAreasViewer,
        ],
      },
      documentImport: {
        id: 'documentImport',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.documentEditor,
        ],
      },
      documentCreate: {
        id: 'documentCreate',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.documentEditor,
        ],
        allowedStorageFolders: ['document'],
      },
      documentEdit: {
        id: 'documentEdit',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.documentEditor,
        ],
        allowedStorageFolders: ['document'],
      },
      documentDestroy: {
        id: 'documentDestroy',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.documentEditor,
        ],
        allowedStorageFolders: ['document'],
      },
      documentRead: {
        id: 'documentRead',
        allowedRoles: [
          roles.user,
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.documentEditor,
          roles.documentViewer,
        ],
      },
      assetDestroy: {
        id: 'assetDestroy',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.entityEditor,
          roles.assetEditor,
        ],
        allowedStorageFolders: ['asset'],
      },
      assetAutocomplete: {
        id: 'assetAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.assetEditor,
          roles.assetViewer,
        ],
      },
      lotoTicketsCreate: {
        id: 'lotoTicketsCreate',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager
        ],
        allowedStorageFolders: ['lotoTickets'],
      },
      lotoTicketsEdit: {
        id: 'lotoTicketsEdit',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager,
        ],
        allowedStorageFolders: ['lotoTickets'],
      },
      lotoTicketsDestroy: {
        id: 'lotoTicketsDestroy',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager,
        ],
        allowedStorageFolders: ['lotoTickets'],
      },
      lotoTicketsRead: {
        id: 'lotoTicketsRead',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager,
          roles.security
        ],
      },
      lotoTicketsMobileViewRead: {
        id: 'lotoTicketsMobileViewRead',
        allowedRoles: [
          roles.owner,
          roles.user
        ],
      },
      lotoTicketsMobileRead: {
        id: 'lotoTicketsMobileRead',
        allowedRoles: [
          roles.owner,
          roles.user
        ],
      },
      energyLocksCreate: {
        id: 'energyLocksCreate',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager
        ],
        allowedStorageFolders: ['energyLocks'],
      },
      energyLocksEdit: {
        id: 'energyLocksEdit',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager,
        ],
        allowedStorageFolders: ['energyLocks'],
      },
      energyLocksDestroy: {
        id: 'energyLocksDestroy',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager,
        ],
        allowedStorageFolders: ['energyLocks'],
      },
      energyLocksRead: {
        id: 'energyLocksRead',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
          roles.orgAdmin,
          roles.manager,
          roles.security
        ],
      },
      lotoMenuRead: {
        id: 'lotoMenuRead',
        allowedRoles: [
          roles.owner,
          roles.plantAdmin,
        ],
      },
      mobileLotoMenuRead: {
        id: 'lotoMenuRead',
        allowedRoles: [
          roles.user
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
