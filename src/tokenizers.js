import { ExternalTokenizer } from '@lezer/lr';
import { RawStringSequence } from './parser.terms.js';

const quote = 34;

const RAW_START = 0, RAW_INSIDE = 1, RAW_END = 2;

/*
 * An external tokenizer used to recognize raw string literals tokens
 * since it's not supported by the lezer internal tokenizer
 */
export const rawString = new ExternalTokenizer((input, stack) => {
    let { next } = input;
    if (next !== quote) return;

    let startQuotes = 1, endQuotes = 0;
    let mode = RAW_START;
    next = input.advance();
    while(next !== -1) {
        switch (mode) {
            case RAW_START:
                if (next === quote) {
                    // Check two quotes at a time
                    if (input.peek(1) === quote) {
                        startQuotes += 2;
                        input.advance();
                    } else {
                        if (startQuotes === 1) {
                            // Accept (raw"")
                            input.acceptToken(RawStringSequence, 1);
                        }
                        return;
                    }
                } else {
                    mode = RAW_INSIDE;
                }
                break;
            case RAW_INSIDE:
                if (next === quote) {
                    mode = RAW_END;
                    endQuotes = 1;
                }
                break;
            case RAW_END:
                if (startQuotes === endQuotes) {
                    input.acceptToken(RawStringSequence);
                    return;
                }

                if (next === quote) {
                    ++endQuotes
                    if (startQuotes === endQuotes) {
                        input.acceptToken(RawStringSequence, 1);
                        return;
                    }
                } else {
                    endQuotes = 0;
                    mode = RAW_INSIDE;
                }
                break;
        }
        next = input.advance();
    }
}, {
    contextual: true
})
