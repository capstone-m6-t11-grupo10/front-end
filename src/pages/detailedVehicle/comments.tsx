import { Card, Text } from "@chakra-ui/react"
import { IComment } from "../../interfaces/coments"
import { OneComment } from "./oneComment"

interface ICommentsProps {
    comments: IComment[]
}

export const Comments = ({ comments }: ICommentsProps) => {


    return (
        <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
            <h2
                style={{
                    color: 'var(--grey1)',
                    fontWeight: '600',
                    marginBottom: '2rem'
                }}
            >
                Comentários
            </h2>
            {comments.map(comment =>
                <OneComment commentary={comment} />
            )}
        </Card>
    )
}