const ApplicationRoutes = {
    LANDING: "/",
    AUTH: {
        LOGIN: "/auth/login",
        SIGNUP: "/auth/proceed",
        REDIRECT: "/authorize/redirect",
    },
    DASHBOARD: {
        VACANCIES: {
            VIEW: "/dashboard/vacancies",
            CREATE: "/dashboard/vacancies/create",
            EDIT: "/dashboard/vacancies/:id/edit"
        },
        PROFILE: {
            VIEW: "/dashboard/profile",
            EDIT: "/dashboard/profile/edit",
        },
        PACKAGES: {
            VIEW: "/dashboard/packages"
        }
    },
    VACANCIES: "/vacancies",
    CONTACT_US: "/contact-us",
    DONATION: "/donation"
}

export default ApplicationRoutes;