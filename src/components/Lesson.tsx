import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type LessonProps = {
    title: string,
    slug: string,
    type: 'class' | 'live'
    availableAt: Date
}

export function Lesson({ title, slug, type, availableAt }: LessonProps) {

    const isContentAvailable = (isPast(availableAt))
    const availableDateFormated = format(availableAt,"EEEE', 'd' de 'MMMM' às 'k'h'mm",{locale: ptBR})
    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDateFormated}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                
                <header className="flex items-center justify-between">

                    {isContentAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex gap-2 items-center">
                            <CheckCircle size={20} />
                            Conteudo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>

                </header>
                
                <strong className="text-gray-200 mt-5 block">
                    {title}
                </strong>
            </div>
        </a>
    )

}