import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_LIST = gql`

    query {
        lessons(stage: PUBLISHED, orderBy: availableAt_ASC) {
            id
            title
            slug
            lessonType
            availableAt
        }
    }
`

type GetLessonsListProps = {
    lessons: {
        id: string,
        title: string,
        slug: string,
        lessonType: 'class' | 'live',
        availableAt: string
    }[]
}


export function SiderBar() {

    const { data } = useQuery<GetLessonsListProps>(GET_LESSONS_LIST)

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 bordre-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div>

                {data?.lessons.map(lesson => (
                    <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        type={lesson.lessonType}
                        availableAt={new Date(lesson.availableAt)}
                    />
                ))}

            </div>
        </aside>
    )

}