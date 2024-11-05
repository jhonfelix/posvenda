import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(request: Request) {
	const body = await request.json();
	const { email,nome,telefone } = body;

	console.log(email)

	if (!email || email === "") {
		return new NextResponse("Error: necessário preencher todos os campos", { status: 400 });
	}


	try {
		await sendEmail({
			to: ["jviolinista@live.com","jhonfelix@hotmail.com","contato@posvenda.net.br"],
			subject: "posvenda Landpage",
			html: ` 
      <div>
        <h1>Contato realizado atráves da Landpage</h1>
        <p>o usuário: ${nome} com e-mail: ${email} pelo celular: ${telefone} entrou em contato pela landpage.</p>
      </div>
      `,
		});

		return NextResponse.json("E-mail enviado com sucesso! Entraremos em contato", {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(`Ocorreu um erro. Por favor tente novamente!${error}`, {
			status: 500,
		});
	}
}
