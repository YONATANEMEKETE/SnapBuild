import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo.png';
import { Button } from '../ui/button';
import { GitBranch } from 'lucide-react';
import github from '../../../public/github.svg';
import { Separator } from '../ui/separator';

const Nav = () => {
  return (
    <nav className="w-full px-2 h-16 flex items-center justify-between">
      <Link href={'/'} className="flex items-center gap-x-1 cursor-pointer">
        <Image
          src={logo}
          alt="logo image"
          className="object-contain size-10 rounded-lg"
        />
        <p className="text-mytext text-2xl font-body font-bold">
          Snap<span className="text-myaccent">Build</span>.
        </p>
      </Link>
      <div className="flex items-center gap-x-4">
        <Link
          target="_blank"
          href={'https://github.com/YONATANEMEKETE/SnapBuild'}
        >
          <Image
            src={github}
            alt="github logo"
            className="object-contain size-8"
          />
        </Link>
        <Separator orientation="vertical" className="h-6" />
        <Link href={'/dashboard'}>
          <Button
            variant={'outline'}
            className="rounded-full text-sm text-mytext font-body font-semibold bg-mybg hover:bg-mybg"
          >
            Dashboard
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
