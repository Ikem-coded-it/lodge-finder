import Main from "@/app/ui/components/Main";
import VacancyForm from "@/app/ui/components/Dashboard/vacancies/form";
import { initialVacancyValues } from "@/app/lib/store/vacancy-form";

export default function Page() {

    return (
        <Main>
            <header className="h-[58px] w-full flex items-center justify-between px-4 py-2 mb-3">
                <h1 className="text-xs text-darkFont-default">
                    UPLOAD VACANCY
                </h1>
            </header>

            <section className="w-full h-fit flex justify-center lg:justify-start">
                <VacancyForm
                initialValues={initialVacancyValues}
                validation={{}}
                />
            </section>
        </Main>
    )
}