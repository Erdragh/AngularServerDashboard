import { Time } from "@angular/common";

export class TerminalMessageModule {
    private timestamp: Date;
    private message: string;
    private kind: string;

    private kindToString: {[s: string]: any } = {
        'error': "ERROR",
        'warning': "WARNING",
        'success': "SUCCESS",
        'default': "INFO"
    }

    constructor(timestamp: Date, message: string, kind: string = 'default') {
        this.timestamp = timestamp;
        this.message = message;
        this.kind = kind;
    }

    getTimestamp() {
        return this.timestamp;
    }

    getMessage() {
        return this.message;
    }

    asString() {
        return "[" + this.timestamp.toLocaleTimeString() + "] " + this.message;
    }

    ofKind(kind: string) {
        // console.log("message is of kind: ", this.kind, "; message is of kind: ", kind, "? ", this.kind === kind);
        return kind === this.kind;
    }

    getKind(): string {
        return this.kindToString[this.kind];
    }

}