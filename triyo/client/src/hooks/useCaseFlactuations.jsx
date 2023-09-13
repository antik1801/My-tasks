import { useQuery } from 'react-query'
const useCaseFlactuations = () => {
 const {isLoading, isError, } = useQuery({
    queryKey: ["case"],
    queryFn:
 })
}

export default useCaseFlactuations
