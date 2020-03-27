/**
 * Enumeration of entity type will be used notify components of service operations
 */
export enum ServiceStatesEnum {

    /**
     * The service has saved data
     */
    Saved = 1,

    /**
     * The user has clicked an element
     */
    UserClicked = 2,

    /**
     * The has selected an item
     */
    Selected = 3,

    /**
     * The service has loaded specific data
     */
    Loaded = 4,

    /**
     * The service has an error specific data
     */
    Error = 5,

    /**
     * The service has to refresh data
     */
    Refresh = 6,

    /*
     * The service has deleted data.
     */
    Deleted = 7
}
