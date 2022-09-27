import { useState, Fragment } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle({enabled, setEnabled}) {

    return (
        <div dir={"ltr"}>
        <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
            {({ checked }) => (
                <button
                    className={`${
                        checked ? 'border-primary' : 'border-s-60'
                    } border relative inline-flex h-6 w-12 items-center rounded-full`}
                >
                    <span
                        className={`${
                            checked ? 'translate-x-6 bg-primary' : 'translate-x-[2px] bg-s-60'
                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                </button>
            )}
        </Switch>
        </div>
    )
}