JOBSY.SK — SUPABASE AUTH EMAIL TEMPLATES

Všetkých 6 šablón má rovnaký dizajn ako potvrdenie registrácie.

1. Confirm sign up — {{ .ConfirmationURL }}
2. Invite user — {{ .ConfirmationURL }}
3. Magic link or OTP — {{ .ConfirmationURL }}
4. Change email address — {{ .ConfirmationURL }} + {{ .NewEmail }}
5. Reset password — {{ .ConfirmationURL }}
6. Reauthentication — {{ .Token }}

Poznámka:
Pri Magic link or OTP Supabase rozhoduje podľa použitej premennej:
- {{ .ConfirmationURL }} = magic link
- {{ .Token }} = OTP
Pri reauthentication používaj {{ .Token }}.

Subjects odporúčané:
1. Potvrď svoju emailovú adresu · jobsy.sk
2. Pozvánka na jobsy.sk
3. Tvoj prihlasovací odkaz · jobsy.sk
4. Potvrď novú emailovú adresu · jobsy.sk
5. Obnov si heslo · jobsy.sk
6. {{ .Token }} je tvoj overovací kód · jobsy.sk

Zdroj premenných: Supabase Email Templates dokumentácia.
