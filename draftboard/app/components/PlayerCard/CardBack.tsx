interface CardBackProps {
    backgroundColor?: string;
}

export default function CardBack({ backgroundColor }: CardBackProps) {
    return (
        <section
            className="
        w-[320px]
        h-[450px]
        rounded-tl-[20px]
        rounded-tr-[20px]
        rounded-bl-[40px]
        rounded-br-none
        p-[5px]
        overflow-hidden
        relative
      "
            style={{
                backgroundColor,
            }}
        >

        </section>
    );
}
