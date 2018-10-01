/**
 * https://autoin.atlassian.net/wiki/spaces/PS/pages/73334819/User+Roles
 */
const
    NO_ROLE = "No Role",
    USER_ADMIN = "User Admin",
    DEVELOPER = "Developer",
    LIMITED_CUSTOMER_MANAGER = "Limited Customer Manager",
    CUSTOMER_MANAGER = "Customer Manager",
    SUPER_ADMIN = "Super Admin";

export default class Role {
    /** Not an actual WS role.  Used to describe users who have no listed roles. */
    static get noRole() { return NO_ROLE; }
    static get userAdmin() { return USER_ADMIN; }
    static get developer() { return DEVELOPER; }
    static get limitedCustomerManager() { return LIMITED_CUSTOMER_MANAGER; }
    /** no access - high risk */
    static get customerManager() { return CUSTOMER_MANAGER; }
    /** no access - high risk */
    static get superAdmin() { return SUPER_ADMIN; }
}

// export default new Role();



