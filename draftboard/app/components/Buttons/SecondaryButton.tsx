// other actions get secondary or tertiary 

// The most important action gets the primary 
// new, edit, settings buttons can absolutely be primary or secondary buttons.

interface SecondaryButtonProps {

}

export default function SecondaryButton() {

    return (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
            Button
        </button>
    );
}
