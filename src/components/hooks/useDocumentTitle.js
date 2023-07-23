import { useEffect } from 'react'

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])
}

export default useDocumentTitle;