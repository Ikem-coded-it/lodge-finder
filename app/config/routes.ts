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
        }
    },
    VACANCIES: "/vacancies",
    CONTACT_US: "/contact-us"
}

export default ApplicationRoutes;