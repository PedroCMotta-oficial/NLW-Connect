import Image from 'next/image';

import logo from '@/assets/Logo.svg';
import { Radio, User, Mail, ArrowRight } from "lucide-react";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Button } from "@/components/button";

export default function InvitePage() {
  return (
    <div
      className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row"
    >
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30}/>

        <div className="space-y-2">
          <h1>Inscrição Confirmada!</h1>
          <p>Para entrar no evento, acesse o link enviado para seu e-mail.</p>
        </div>
      </div>
    </div>
  );
}