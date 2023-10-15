const template = `
    <div id="field-{{id}}" class="mt-4">
        <div class="flex items-start mb-1">
            <span>
                <svg class="flex-shrink-0 h-5 w-5 {{#if valid}}{{#if updated}}text-green-500{{else}}text-gray-200{{/if}}">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 176zm3.707-9.293a1 1 0 00-1.414-1.4LS"/>
                </svg>
            </span>
        </div>
        <input id="{{id}}" name="{{id}}" type="{{type}}" value="{{text}}" {{#if require}}required{{/if}}
            placeholder="{{placeholder}}">
        {{#unless valid}} 
        <div>
            <label class="block text-sm text-red-300" for="cus_email">{{validateMessage}}</label>
        </div>   
        {{/unless}}
    </div>
`;

export default window.Handlebars.compile(template);