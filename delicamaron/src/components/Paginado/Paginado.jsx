import "./paginado.css"
import Button from 'react-bootstrap/Button';


export default function Paginado({recetasPerPage,allRecetas,paginado,setCurrentPage,currentPage}){
    
    


    const pageNumbers = []

    for(let i= 1; i<= Math.ceil(allRecetas/recetasPerPage); i++){
        pageNumbers.push(i)
    }

    function handlePrev(e) {
        e.preventDefault()
        if (e.target.innerHTML === "Next" && currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1)
        } 
        if(e.target.innerHTML === "Prev" && currentPage > 1 ) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="paginador">
                    
                <div className="prev">
                <Button variant="dark" size="lg" onClick={(e)=>handlePrev(e)}>Prev</Button>
                </div>

                <div className="next">
                <Button variant="dark" size="lg" onClick={(e)=>handlePrev(e)}>Next</Button>
                </div>

           
        </div>
    )

}


//PAGINADO CON NUMEROS OSEA SIN NEXT Y PREVIOUS
// {pageNumbers && pageNumbers.map(number =>(
                    
                    
                         
//     <button onClick={()=>paginado(number)}> {number}  </button>
   

// ))}                      