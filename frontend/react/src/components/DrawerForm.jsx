import { Button } from "@chakra-ui/react";

const AddIcon = () => "+";

const DrawerForm = () => {
    return (
        <Button
            leftIcon={<AddIcon/>}
            colorScheme={"teal"}
            onClick={() => alert("Create new customer")}
        >
            Create Customer
        </Button>
    )
}

export default DrawerForm;