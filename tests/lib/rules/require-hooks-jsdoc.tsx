import {hooksRule} from "../../../src/lib/rules/require-hooks-jsdoc"
import {ruleTester} from '../utils';

ruleTester.run('required-hooks-jsdoc', hooksRule, {
    valid: [
        {
            code: `/**
            *
            * This hook is uses for...
            */
           useDef = () => useState('Apple')`,
        }, {
            code: `/**
            * @description This hook is uses for...
            */
            useDef = () => useState('Apple')`,
        },
    ],
    invalid: [],
});
