import NavbarItem from "@/components/navigation/NavbarItem";
import AddItem from "@/components/addItem/AddItem";


const AddItemPage = () => {
    return(
        <div>
            <NavbarItem></NavbarItem>
            <AddItem firstInput="Enter Recipe Name" secondInput="Enter price"></AddItem>
    
        </div>
        )
      
}

export default AddItemPage;